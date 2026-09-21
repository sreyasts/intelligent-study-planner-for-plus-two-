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

    // 3. Test Language Switcher in Online Mode
    const langBtn = page.locator('#lang-switch-btn');
    await expect(langBtn).toBeVisible();
    await expect(page.locator('#lang-btn-flag')).toHaveText('EN');

    // Toggle to Malayalam
    await langBtn.click();
    await expect(page.locator('#lang-btn-flag')).toHaveText('മല');
    await expect(page.locator('#nav-text-today')).toHaveText('ഇന്ന്');

    // Toggle back to English
    await langBtn.click();
    await expect(page.locator('#lang-btn-flag')).toHaveText('EN');
    await expect(page.locator('#nav-text-today')).toHaveText('Today');

    // 4. Emulate Going Completely Offline
    await context.setOffline(true);

    // 5. Reload the page while completely offline
    await page.reload({ waitUntil: 'domcontentloaded' });

    // 6. Verify Cold Offline Experience loads correctly
    await expect(page.locator('h1')).toContainText('Mission');
    await expect(page.locator('#lang-switch-btn')).toBeVisible();

    // Re-enable online
    await context.setOffline(false);
  });
});
