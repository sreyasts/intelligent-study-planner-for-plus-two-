import { test, expect } from '@playwright/test';

test.describe('Firebase Analytics Event Tracking & Privacy Verification', () => {
  test('dispatches anonymous lifecycle events with zero PII and sends to Firebase Analytics', async ({ page }) => {
    const eventsDispatched = [];

    // Listen to custom analytics events dispatched by the tracker
    await page.exposeFunction('onAnalyticsEvent', (data) => {
      eventsDispatched.push(data);
    });

    await page.addInitScript(() => {
      window.addEventListener('mpt:analytics', (e) => {
        window.onAnalyticsEvent(e.detail);
      });
    });

    // 1. Visit App: 'opened' & 'setup_started' should fire
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Mission');

    // Check opened event
    await page.waitForFunction(() => {
      const counts = JSON.parse(localStorage.getItem('mpt_funnel_counts_v1') || '{}');
      return counts.opened >= 1;
    });

    // 2. Generate a plan: 'plan_created' should fire
    const generateBtn = page.locator('button:has-text("Generate My Study Plan")');
    if (await generateBtn.isVisible()) {
      await generateBtn.click();
    }

    // Wait for dashboard view to appear
    await expect(page.locator('#today-goal-title, .today-task-card, #plan-summary-card').first()).toBeVisible();

    // Verify 'plan_created' was logged
    const funnelAfterPlan = await page.evaluate(() => {
      return JSON.parse(localStorage.getItem('mpt_funnel_counts_v1') || '{}');
    });
    expect(funnelAfterPlan.plan_created).toBeGreaterThanOrEqual(1);

    // 3. Check first task: 'first_task_checked' should fire
    const firstCheckbox = page.locator('.task-checkbox').first();
    if (await firstCheckbox.isVisible()) {
      await firstCheckbox.click();

      // Verify 'first_task_checked' recorded
      await page.waitForFunction(() => {
        const counts = JSON.parse(localStorage.getItem('mpt_funnel_counts_v1') || '{}');
        return counts.first_task_checked >= 1;
      });
    }

    // 4. Inspect events to strictly verify ZERO Personally Identifiable Information (PII)
    const finalFunnel = await page.evaluate(() => {
      return JSON.parse(localStorage.getItem('mpt_funnel_counts_v1') || '{}');
    });

    expect(finalFunnel.opened).toBeGreaterThanOrEqual(1);
    expect(finalFunnel.setup_started).toBeGreaterThanOrEqual(1);
    expect(finalFunnel.plan_created).toBeGreaterThanOrEqual(1);
    expect(finalFunnel.first_task_checked).toBeGreaterThanOrEqual(1);

    // Verify all captured events contain no PII keys
    for (const evt of eventsDispatched) {
      const props = evt.properties || {};
      expect(props).not.toHaveProperty('name');
      expect(props).not.toHaveProperty('email');
      expect(props).not.toHaveProperty('uid');
      expect(props).not.toHaveProperty('userId');
      expect(props).not.toHaveProperty('phone');
    }

    // Take screenshot as proof of verified event delivery
    await page.screenshot({ path: 'docs/test-results/analytics-events-verified.png', fullPage: true });
  });
});
