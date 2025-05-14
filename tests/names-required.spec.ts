import { test, expect } from '@playwright/test';
import { wizardPath } from './fixtures';

test('all player names are required before starting the game (3 players)', async ({ page }) => {
  await page.goto(wizardPath);
  // Click the 3 player button
  await page.click('button[data-players="3"]');

  // Try to submit with all names empty
  await page.click('button[type="submit"]');
  // Should not advance to the next step (should still see the player name form)
  await expect(page.locator('h2')).toHaveText(/Enter player names/i);

  // Fill only one name
  await page.fill('input[name="player0"]', 'Alice');
  await page.click('button[type="submit"]');
  await expect(page.locator('h2')).toHaveText(/Enter player names/i);

  // Fill two names
  await page.fill('input[name="player1"]', 'Bob');
  await page.click('button[type="submit"]');
  await expect(page.locator('h2')).toHaveText(/Enter player names/i);

  // Fill all three names
  await page.fill('input[name="player2"]', 'Carol');
  await page.click('button[type="submit"]');
  // Should advance to the game (should see the round form)
  await expect(page.locator('h2')).toHaveText(/Round 1/i);
});