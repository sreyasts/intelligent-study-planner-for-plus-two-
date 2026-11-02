import { test, expect } from '@playwright/test';

test('phone and PC restore, share progress, and recover an offline untick after reload', async ({ browser }) => {
  let account = null;
  let revision = 0;
  const contexts = [];
  const errors = [];
  async function openDevice(viewport) {
    const context = await browser.newContext({ viewport, timezoneId: 'Asia/Kolkata', serviceWorkers: 'block' });
    contexts.push(context);
    await context.exposeBinding('accountServer', (_source, action, value, expectedRevision) => {
      if (action === 'read') return { state: account, revision };
      if (expectedRevision !== revision) return false;
      account = value;
      revision++;
      return true;
    });
    await context.addInitScript(() => {
      const offline = () => sessionStorage.getItem('sync-test-offline') === 'true';
      const read = async () => {
        if (offline()) throw new Error('offline');
        return window.accountServer('read');
      };
      const snapshot = state => ({ exists: !!state, data: () => state, metadata: { fromCache: false, hasPendingWrites: false } });
      const ref = {
        get: async () => snapshot((await read()).state),
        onSnapshot: (_options, callback) => {
          let lastRevision = -1;
          const timer = setInterval(async () => {
            try {
              const result = await read();
              if (result.revision !== lastRevision) {
                lastRevision = result.revision;
                callback(snapshot(result.state));
              }
            } catch { /* Simulate disconnected SDK listeners without replacing local progress. */ }
          }, 100);
          return () => clearInterval(timer);
        },
      };
      const db = {
        enablePersistence: async () => {},
        collection: () => ({ doc: () => ref }),
        runTransaction: async update => {
          for (let attempt = 0; attempt < 5; attempt++) {
            const current = await read();
            let payload;
            const result = await update({ get: async () => snapshot(current.state), set: (_ref, value) => { payload = value; } });
            if (await window.accountServer('write', payload, current.revision)) return result;
          }
          throw new Error('transaction contention');
        },
      };
      const user = { uid: 'sync-browser-student', email: 'student@example.com', displayName: 'Sync Student' };
      window.firebase = {
        apps: [{}], auth: () => ({
          getRedirectResult: async () => ({}),
          onAuthStateChanged: callback => { Promise.resolve().then(() => callback(user)); return () => {}; },
        }), firestore: () => db, analytics: () => ({ logEvent: () => {} }),
      };
    });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/');
    return page;
  }
  try {
    const phone = await openDevice({ width: 390, height: 900 });
    await expect(phone.locator('#account-sync-status')).toHaveText('Saved to account');
    await phone.locator('#setup-step-pill-4').click();
    await phone.getByRole('button', { name: 'Start Day 1', exact: true }).click();
    await expect.poll(() => account?.plan?.length || 0).toBeGreaterThan(0);
    const ids = account.plan.flatMap(day => day.tasks).slice(0, 2).map(task => task.id);
    await phone.evaluate(id => window.toggleTaskDirect(id), ids[0]);
    await expect.poll(() => account.plan.flatMap(day => day.tasks).filter(task => task.completed).length).toBe(1);

    const pc = await openDevice({ width: 1440, height: 1000 });
    const done = page => page.evaluate(() => window.appState?.plan?.flatMap(day => day.tasks).filter(task => task.completed).length ?? -1);
    await expect.poll(() => done(pc)).toBe(1);
    await expect(pc.locator('#setup-wizard-card')).toHaveCount(0);
    await pc.evaluate(id => window.toggleTaskDirect(id), ids[1]);
    await expect.poll(() => done(phone)).toBe(2);

    await phone.evaluate(() => sessionStorage.setItem('sync-test-offline', 'true'));
    await phone.evaluate(id => window.toggleTaskDirect(id), ids[0]);
    await expect(phone.locator('#account-sync-status')).toContainText('cloud sync needs retry');
    await phone.reload();
    await expect.poll(() => done(phone)).toBe(1);
    await phone.evaluate(() => {
      sessionStorage.removeItem('sync-test-offline');
      window.dispatchEvent(new Event('online'));
    });
    await expect(phone.locator('#account-sync-status')).toHaveText('Saved to account');
    await expect.poll(() => done(pc)).toBe(1);
    expect(account.plan.flatMap(day => day.tasks).find(task => task.id === ids[0]).completed).toBe(false);
    expect(account.plan.flatMap(day => day.tasks).find(task => task.id === ids[1]).completed).toBe(true);
    expect(errors).toEqual([]);
  } finally {
    await Promise.allSettled(contexts.map(context => context.close()));
  }
});
