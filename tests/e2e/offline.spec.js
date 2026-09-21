import { test, expect } from '@playwright/test';

test.describe('PWA Cold Offline Start & Language Switcher', () => {
  test('cold offline start works and language switcher toggles seamlessly', async ({ page, context }) => {
    // 1. Visit the app online first so service worker registers & precaches assets
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Mission');

    // 2. Wait for Service Worker registration to complete
    await page.waitForFunction(async () => {
      if (!('serviceWorker' in navigator)) return false;
      const reg = await navigator.serviceWorker.getRegistration();
      return reg !== undefined && (reg.active !== null || reg.installing !== null);
    });

    // 3. Verify Language Switcher is removed from header and moved to Settings Modal
    await expect(page.locator('#lang-switch-btn')).toHaveCount(0);

    // Open Settings Modal via evaluate
    await page.evaluate(() => openSettingsModal());
    await expect(page.locator('#settings-modal')).toBeVisible();
    await expect(page.locator('#lang-btn-en')).toBeVisible();
    await expect(page.locator('#lang-btn-ml')).toBeVisible();
    await expect(page.locator('#settings-lang-badge')).toHaveText('English');

    // Toggle to Malayalam
    await page.locator('#lang-btn-ml').click();
    await expect(page.locator('#settings-lang-badge')).toHaveText('മലയാളം');
    await expect(page.locator('#nav-text-today')).toHaveText('ഇന്ന്');

    // Toggle back to English
    await page.locator('#lang-btn-en').click();
    await expect(page.locator('#settings-lang-badge')).toHaveText('English');
    await expect(page.locator('#nav-text-today')).toHaveText('Today');

    // Close settings modal
    await page.evaluate(() => closeSettingsModal());
    await expect(page.locator('#settings-modal')).not.toBeVisible();

    // 4. Emulate Going Completely Offline
    await context.setOffline(true);

    // 5. Reload the page while completely offline
    await page.reload({ waitUntil: 'domcontentloaded' });

    // 6. Verify Cold Offline Experience loads correctly
    await expect(page.locator('h1')).toContainText('Mission');
    await expect(page.locator('#lang-switch-btn')).toHaveCount(0);

    // Open settings while offline and ensure language toggle still works
    await page.evaluate(() => openSettingsModal());
    await expect(page.locator('#settings-modal')).toBeVisible();
    await page.locator('#lang-btn-ml').click();
    await expect(page.locator('#nav-text-today')).toHaveText('ഇന്ന്');

    // Re-enable online
    await context.setOffline(false);
  });
});
