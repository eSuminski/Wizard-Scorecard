import { test, expect } from '@playwright/test';

test('6 player game: play again button resets to player count view', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/src/Wizard.html');

  // Step 1: Select 6 players
  await page.getByRole('button', { name: '6 Players' }).click();

  // Step 2: Enter player names using input[name="player0"] ... input[name="player5"]
  for (let i = 0; i < 6; i++) {
    await page.locator(`input[name="player${i}"]`).fill(`P${i + 1}`);
  }
  await page.getByRole('button', { name: 'Start Game' }).click();

  // Step 3: Play all rounds (10 rounds for 6 players)
  for (let round = 1; round <= 10; round++) {
    for (let i = 0; i < 6; i++) {
      // Set bid and trick for each player to 0 except last, so total = round
      const bid = i === 5 ? round : 0;
      const trick = i === 5 ? round : 0;
      // Set bid
      const bidInput = await page.locator(`#bid${i}`);
      await bidInput.fill(bid.toString());
      // Set trick
      const trickInput = await page.locator(`#trick${i}`);
      await trickInput.fill(trick.toString());
    }
    await page.getByRole('button', { name: 'Submit Round' }).click();
  }

  // Step 4: Validate winner screen and Play Again button
  await expect(page.getByText('Congratulations')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Play Again' })).toBeVisible();

  // Step 5: Click Play Again and check for player count view
  await page.getByRole('button', { name: 'Play Again' }).click();
  await expect(page.getByText('How many players?')).toBeVisible();
});
