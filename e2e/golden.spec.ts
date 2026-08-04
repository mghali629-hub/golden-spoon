import { test, expect } from '@playwright/test';

test.describe('Golden Spoon E2E Test Suite', () => {
  test('should display homepage and complete table reservation', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Golden Spoon')).toBeVisible();
    await page.fill('input[placeholder="Guest Name"]', 'Antoine Laurent');
    await page.fill('input[placeholder="Phone Number"]', '+15550192834');
    await page.click('button:has-text("Confirm Reservation")');
    await expect(page.locator('text=Table Reserved')).toBeVisible();
  });
});
