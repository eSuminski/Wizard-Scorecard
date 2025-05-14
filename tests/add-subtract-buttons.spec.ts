import { test, expect } from '@playwright/test';
import { playerNames, wizardPath } from './fixtures';

test('decrement button decreases bid and trick input values', async ({ page }) => {
  await page.goto(wizardPath);
  await page.click('text=3 Players');
  await page.fill('input[name="player0"]', playerNames[0]);
  await page.fill('input[name="player1"]', playerNames[1]);
  await page.fill('input[name="player2"]', playerNames[2]);
  await page.click('text=Start Game');

  // Set bid and trick for player 0 to 2
  await page.fill('input[name="bid0"]', '2');
  await page.fill('input[name="trick0"]', '2');

  // Click decrement for bid0 and trick0
  await page.click('#bid-decrement-0');
  await page.click('#trick-decrement-0');
  await expect(page.locator('input[name="bid0"]')).toHaveValue('1');
  await expect(page.locator('input[name="trick0"]')).toHaveValue('1');

  // Click decrement again, should go to 0
  await page.click('#bid-decrement-0');
  await page.click('#trick-decrement-0');
  await expect(page.locator('input[name="bid0"]')).toHaveValue('0');
  await expect(page.locator('input[name="trick0"]')).toHaveValue('0');

  // Click decrement again, should stay at 0
  await page.click('#bid-decrement-0');
  await page.click('#trick-decrement-0');
  await expect(page.locator('input[name="bid0"]')).toHaveValue('0');
  await expect(page.locator('input[name="trick0"]')).toHaveValue('0');
});

test('increment button increases bid and trick input values', async ({ page }) => {
  await page.goto(wizardPath);
  await page.click('text=3 Players');
  await page.fill('input[name="player0"]', playerNames[0]);
  await page.fill('input[name="player1"]', playerNames[1]);
  await page.fill('input[name="player2"]', playerNames[2]);
  await page.click('text=Start Game');

  // Ensure bid and trick for player 0 are 0
  await page.fill('input[name="bid0"]', '0');
  await page.fill('input[name="trick0"]', '0');

  // Click increment for bid0 and trick0
  await page.click('#bid-increment-0');
  await page.click('#trick-increment-0');
  await expect(page.locator('input[name="bid0"]')).toHaveValue('1');
  await expect(page.locator('input[name="trick0"]')).toHaveValue('1');
});
