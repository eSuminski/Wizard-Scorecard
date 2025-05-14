import { test, expect } from '@playwright/test';
import { wizardPath } from './fixtures';

test('Wizard.html loads and displays title', async ({ page }) => {
  await page.goto(wizardPath);
  await expect(page).toHaveTitle(/Wizard/i);
});
