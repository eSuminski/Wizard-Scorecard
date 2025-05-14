import { test, expect } from '@playwright/test';
import { playerNames, playData6, wizardPath } from './fixtures';

test('6 player game full playthrough and winner validation', async ({ page }) => {
  const rounds = 10;
  await page.goto(wizardPath);
  await page.click('text=6 Players');
  await page.fill('input[name="player0"]', playerNames[0]);
  await page.fill('input[name="player1"]', playerNames[1]);
  await page.fill('input[name="player2"]', playerNames[2]);
  await page.fill('input[name="player3"]', playerNames[3]);
  await page.fill('input[name="player4"]', playerNames[4]);
  await page.fill('input[name="player5"]', playerNames[5]);
  await page.click('text=Start Game');
  for (let round = 1; round <= rounds; round++) {
    const [bBid, sBid, tBid, fBid, hBid, teBid, bTrick, sTrick, tTrick, fTrick, hTrick, teTrick] = playData6[round - 1];
    await page.fill('input[name="bid0"]', bBid.toString());
    await page.fill('input[name="bid1"]', sBid.toString());
    await page.fill('input[name="bid2"]', tBid.toString());
    await page.fill('input[name="bid3"]', fBid.toString());
    await page.fill('input[name="bid4"]', hBid.toString());
    await page.fill('input[name="bid5"]', teBid.toString());
    await page.fill('input[name="trick0"]', bTrick.toString());
    await page.fill('input[name="trick1"]', sTrick.toString());
    await page.fill('input[name="trick2"]', tTrick.toString());
    await page.fill('input[name="trick3"]', fTrick.toString());
    await page.fill('input[name="trick4"]', hTrick.toString());
    await page.fill('input[name="trick5"]', teTrick.toString());
    await page.click('button:has-text("Submit Round")');
  }
  const winnerText = await page.locator('.winner').innerText();
  expect(winnerText).toContain('Billy');
});
