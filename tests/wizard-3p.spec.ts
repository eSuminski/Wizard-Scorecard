import { test, expect } from '@playwright/test';
import { playerNames, playData, playData4, playData5, playData6, wizardPath } from './fixtures';

test('Wizard.html loads and displays title', async ({ page }) => {
  await page.goto(wizardPath);
  await expect(page).toHaveTitle(/Wizard/i);
});

test('3 player game full playthrough and winner validation', async ({ page }) => {
  await page.goto(wizardPath);
  await page.click('text=3 Players');
  await page.fill('input[name="player0"]', playerNames[0]);
  await page.fill('input[name="player1"]', playerNames[1]);
  await page.fill('input[name="player2"]', playerNames[2]);
  await page.click('text=Start Game');

  // For 3 players, Wizard rules: 60 cards / 3 = 20 rounds
  const rounds = 20;
  for (let round = 1; round <= rounds; round++) {
    const [bBid, sBid, tBid, bTrick, sTrick, tTrick] = playData[round - 1];
    await page.fill('input[name="bid0"]', bBid.toString());
    await page.fill('input[name="bid1"]', sBid.toString());
    await page.fill('input[name="bid2"]', tBid.toString());
    await page.fill('input[name="trick0"]', bTrick.toString());
    await page.fill('input[name="trick1"]', sTrick.toString());
    await page.fill('input[name="trick2"]', tTrick.toString());
    await page.click('button:has-text("Submit Round")');
  }

  // After all rounds, check for the winner message
  const winnerText = await page.locator('.winner').innerText();
  // Based on the playData and scoring rules, Teddy will win
  expect(winnerText).toContain('Teddy');
});
