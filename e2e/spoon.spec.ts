import { test, expect } from '@playwright/test';

test.describe('Golden Spoon Michelin E2E Automation Suite', () => {
  test('should load restaurant landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Golden Spoon')).toBeVisible();
  });

  test('should navigate to tasting menu page', async ({ page }) => {
    await page.goto('/menu');
    await expect(page.locator('text=Summer Tasting Menu')).toBeVisible();
  });

  test('should navigate to wine bar cellar', async ({ page }) => {
    await page.goto('/menu/wine-bar');
    await expect(page.locator('text=Vintage Wine Collection')).toBeVisible();
  });

  test('should navigate to chefs directory', async ({ page }) => {
    await page.goto('/chefs');
    await expect(page.locator('text=The Culinary Alchemy Team')).toBeVisible();
  });
});
