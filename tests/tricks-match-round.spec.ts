import { Page, test, expect } from '@playwright/test';
import { wizardPath } from './fixtures';

test.describe('Tricks total must match round number', () => {
  async function goToRoundForm(page: Page, numPlayers: number) {
    await page.goto(wizardPath);
    await page.click(`button[data-players="${numPlayers}"]`);
    for (let i = 0; i < numPlayers; i++) {
      await page.fill(`input[name="player${i}"]`, `Player${i+1}`);
    }
    await page.click('button[type="submit"]');
    await expect(page.locator('h2')).toHaveText(/Round 1/);
  }

  test('3 player game: trick total not matching round turns inputs yellow', async ({ page }) => {
    await goToRoundForm(page, 3);
    // Set bids and tricks so tricks do not sum to 1 (round 1)
    for (let i = 0; i < 3; i++) {
      await page.fill(`input[name="bid${i}"]`, '0');
      await page.fill(`input[name="trick${i}"]`, '0');
    }
    await page.click('button[type="submit"]');
    // All trick inputs should have yellow background
    for (let i = 0; i < 3; i++) {
      const input = page.locator(`input[name="trick${i}"]`);
      await expect(input).toHaveCSS('background-color', 'rgb(255, 255, 0)'); // yellow
      await expect(input).toHaveCSS('color', 'rgb(0, 0, 0)'); // black
    }
    // Fix the total, should allow submit
    await page.fill('input[name="trick0"]', '1');
    await page.click('button[type="submit"]');
    // Should advance to next round or scoreboard
    await expect(page.locator('h3')).toHaveText(/Scoreboard/);
  });

  test('6 player game: trick total not matching round turns inputs yellow', async ({ page }) => {
    await goToRoundForm(page, 6);
    // Set bids and tricks so tricks do not sum to 1 (round 1)
    for (let i = 0; i < 6; i++) {
      await page.fill(`input[name="bid${i}"]`, '0');
      await page.fill(`input[name="trick${i}"]`, '0');
    }
    await page.click('button[type="submit"]');
    // All trick inputs should have yellow background
    for (let i = 0; i < 6; i++) {
      const input = page.locator(`input[name="trick${i}"]`);
      await expect(input).toHaveCSS('background-color', 'rgb(255, 255, 0)'); // yellow
      await expect(input).toHaveCSS('color', 'rgb(0, 0, 0)'); // black
    }
    // Fix the total, should allow submit
    await page.fill('input[name="trick0"]', '1');
    await page.click('button[type="submit"]');
    // Should advance to next round or scoreboard
    await expect(page.locator('h3')).toHaveText(/Scoreboard/);
  });
});