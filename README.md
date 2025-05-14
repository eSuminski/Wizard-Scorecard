# Wizard Score Application

A simple web-based application for tracking scores in the card game Wizard.

## Features
- Add and manage players
- Enter and update round scores
- Automatic score calculation
- User-friendly interface

## Getting Started

### For Users: Quick Start
If you just want to use the app:
1. Download the latest [`Wizard.html`](src/Wizard.html) file from the [GitHub repository](https://github.com/eSuminski/Wizard-Scorecard/blob/main/src/Wizard.html).
2. Open the downloaded `Wizard.html` file in your web browser (Chrome, Firefox, Edge, Safari).

No installation or server setup required.

### For Developers: Local Development & Testing
If you want to make edits or contribute:
1. Clone this repository:
   ```bash
   git clone https://github.com/eSuminski/Wizard-Scorecard.git
   cd Wizard-Scorecard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open and edit the app source in `src/Wizard.html` using your preferred code editor.
4. To run automated tests (using Playwright):
   ```bash
   npx playwright test
   ```
   This will run all pre-made Playwright tests in the `tests/` directory.

## Usage
- Add player names at the start of the game.
- Enter each player's bid and actual tricks per round.
- The app will automatically calculate and display scores after each round.

## Acknowledgments
- Inspired by the card game Wizard
