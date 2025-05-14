// tests/fixtures.ts
// Shared test data and fixtures for Wizard score app tests

import path from 'path';

export const playerNames = ['Billy', 'Sally', 'Teddy', 'Freddy', 'Harry', 'Terry'];
// Each subarray: [BillyBid, SallyBid, TeddyBid, BillyTrick, SallyTrick, TeddyTrick]
export const playData = [
  [1, 0, 0, 1, 0, 0], // round 1
  [1, 1, 0, 1, 1, 0], // round 2
  [1, 1, 1, 1, 1, 1], // round 3
  [2, 1, 1, 2, 1, 1], // round 4
  [2, 2, 1, 2, 2, 1], // round 5
  [2, 2, 2, 2, 2, 2], // round 6
  [2, 2, 3, 2, 2, 3], // round 7
  [3, 2, 3, 3, 2, 3], // round 8
  [3, 3, 3, 3, 3, 3], // round 9
  [3, 3, 4, 3, 3, 4], // round 10
  [4, 3, 4, 4, 3, 4], // round 11
  [4, 4, 4, 4, 4, 4], // round 12
  [4, 4, 5, 4, 4, 5], // round 13
  [5, 4, 5, 5, 4, 5], // round 14
  [5, 5, 5, 5, 5, 5], // round 15
  [5, 5, 6, 5, 5, 6], // round 16
  [6, 5, 6, 6, 5, 6], // round 17
  [6, 6, 6, 6, 6, 6], // round 18
  [6, 6, 7, 6, 6, 7], // round 19
  [7, 6, 7, 7, 6, 7], // round 20
];

// Each subarray: [BillyBid, SallyBid, TeddyBid, FreddyBid, BillyTrick, SallyTrick, TeddyTrick, FreddyTrick]
export const playData4 = [
  [1, 0, 0, 0, 1, 0, 0, 0], // round 1
  [1, 1, 0, 0, 1, 1, 0, 0], // round 2
  [1, 1, 1, 0, 1, 1, 1, 0], // round 3
  [2, 1, 1, 0, 2, 1, 1, 0], // round 4
  [2, 2, 1, 0, 2, 2, 1, 0], // round 5
  [2, 2, 2, 0, 2, 2, 2, 0], // round 6
  [2, 2, 3, 0, 2, 2, 3, 0], // round 7
  [3, 2, 3, 0, 3, 2, 3, 0], // round 8
  [3, 3, 3, 0, 3, 3, 3, 0], // round 9
  [3, 3, 4, 0, 3, 3, 4, 0], // round 10
  [4, 3, 4, 0, 4, 3, 4, 0], // round 11
  [4, 4, 4, 0, 4, 4, 4, 0], // round 12
  [4, 4, 5, 0, 4, 4, 5, 0], // round 13
  [5, 4, 5, 0, 5, 4, 5, 0], // round 14
  [5, 5, 5, 0, 5, 5, 5, 0], // round 15
  [5, 5, 6, 0, 5, 5, 6, 0], // round 16
  [6, 5, 6, 0, 6, 5, 6, 0], // round 17
  [6, 6, 6, 0, 6, 6, 6, 0], // round 18
  [6, 6, 7, 0, 6, 6, 7, 0], // round 19
  [7, 6, 7, 0, 7, 6, 7, 0], // round 20
];

// Each subarray: [BillyBid, SallyBid, TeddyBid, FreddyBid, HarryBid, BillyTrick, SallyTrick, TeddyTrick, FreddyTrick, HarryTrick]
export const playData5 = [
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0], // round 1
  [1, 1, 0, 0, 0, 1, 1, 0, 0, 0], // round 2
  [1, 1, 1, 0, 0, 1, 1, 1, 0, 0], // round 3
  [2, 1, 1, 0, 0, 2, 1, 1, 0, 0], // round 4
  [2, 2, 1, 0, 0, 2, 2, 1, 0, 0], // round 5
  [2, 2, 2, 0, 0, 2, 2, 2, 0, 0], // round 6
  [2, 2, 3, 0, 0, 2, 2, 3, 0, 0], // round 7
  [3, 2, 3, 0, 0, 3, 2, 3, 0, 0], // round 8
  [3, 3, 3, 0, 0, 3, 3, 3, 0, 0], // round 9
  [3, 3, 4, 0, 0, 3, 3, 4, 0, 0], // round 10
  [4, 3, 4, 0, 0, 4, 3, 4, 0, 0], // round 11
  [4, 4, 4, 0, 0, 4, 4, 4, 0, 0], // round 12
];

// Each subarray: [BillyBid, SallyBid, TeddyBid, FreddyBid, HarryBid, TerryBid, BillyTrick, SallyTrick, TeddyTrick, FreddyTrick, HarryTrick, TerryTrick]
export const playData6 = [
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // round 1
  [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0], // round 2
  [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0], // round 3
  [2, 1, 1, 0, 0, 0, 2, 1, 1, 0, 0, 0], // round 4
  [2, 2, 1, 0, 0, 0, 2, 2, 1, 0, 0, 0], // round 5
  [2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0], // round 6
  [2, 2, 3, 0, 0, 0, 2, 2, 3, 0, 0, 0], // round 7
  [3, 2, 3, 0, 0, 0, 3, 2, 3, 0, 0, 0], // round 8
  [3, 3, 3, 0, 0, 0, 3, 3, 3, 0, 0, 0], // round 9
  [3, 3, 4, 0, 0, 0, 3, 3, 4, 0, 0, 0], // round 10
];

export const wizardPath = 'file:///' + path.resolve(__dirname, '../Wizard.html').replace(/\\/g, '/');
