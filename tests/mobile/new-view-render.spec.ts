import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['iPhone 12'] });

test('pause and view player count screen on iPhone', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/src/Wizard.html');
  // Pause execution so you can inspect the UI in the browser
  await page.pause();
  // You can interact with the page manually in the Playwright Inspector
});