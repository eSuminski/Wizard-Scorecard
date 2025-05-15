# Contributing to Wizard Score Application

Thank you for your interest in contributing! 

## How to Contribute

1. **Fork the repository** and create your branch from `main`.
2. **Clone your fork** and set up the project locally:
   ```bash
   git clone https://github.com/your-username/Wizard-Scorecard.git
   cd Wizard-Scorecard
   npm install
   ```
3. **Make your changes** in the `src/` or `tests/` directory as appropriate.
4. **Test your changes** by running:
   ```bash
   npx playwright test
   ```
5. **Commit and push** your changes to your fork.
6. **Open a Pull Request** on GitHub with a clear description of your changes.

## Guidelines
- Write clear, concise commit messages.
- Keep pull requests focused and small if possible.
- Add or update tests for any code changes.
- Follow the existing code style.

## Coding Style

Please follow the existing coding style for both CSS and JavaScript. Here are some examples and guidelines:

### CSS Example
```css
body {
  background: #111;
  color: #fff;
  font-family: 'Segoe UI', Arial, sans-serif;
  margin: 0;
  padding: 0;
}

:root {
  --primary-red: #d32f2f;
  --primary-blue: #1976d2;
  --primary-black: #111;
}

.btn-primary {
  border: none;
  padding: 0.5em 1.5em;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background: linear-gradient(90deg, var(--primary-red), var(--primary-blue));
  color: #fff;
  transition: background 0.2s;
}
```
- Use CSS custom properties for color themes.
- Prefer modern, flat design with gradients and rounded corners.
- Consistent spacing and font settings.
- Button hover effects and clear class naming.

### JavaScript Example
```javascript
function renderPlayerCount() {
  app.innerHTML = `
    <div class="card">
      <h2>How many players?</h2>
      <div class="player-buttons">
        ${[3, 4, 5, 6].map(num => `
          <button class="btn-primary player-btn" data-players="${num}">${num} Players</button>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('.player-btn').forEach(button => {
    button.onclick = (e) => {
      const val = parseInt(e.target.getAttribute('data-players'), 10);
      state.numPlayers = val;
      state.players = Array(val).fill('').map((_, i) => ({ name: '', order: i }));
      state.scores = Array(val).fill(0);
      state.maxRounds = Math.floor(60 / val); // Wizard rules: 60 cards / players
      state.step = 2;
      render();
    };
  });
}
```
- Use template literals for dynamic HTML generation.
- Write modular, functional code (separate render functions for each step).
- Use modern JavaScript features (arrow functions, `const`/`let`, array methods).
- Manage state in a single `state` object.
- Attach event handlers programmatically after rendering.

## Reporting Issues
- Use the GitHub Issues tab to report bugs or request features.
- Please provide as much detail as possible.

Thank you for helping make this project better!
