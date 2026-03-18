# Repository Guidelines

## Project Structure & Module Organization
This repository is split into two Node-based apps:

- `Backend/`: Express + MongoDB API (`src/index.js` entry point).
- `Backend/src/config`: DB connection code.
- `Backend/src/models`: Mongoose models (for example `donater.model.js`).
- `Backend/src/routes`: API routes (for example `Donater.js`).
- `Backend/src/utils`: validation/helpers.
- `Frontend/`: React + Vite client.
- `Frontend/src/components`: primary UI components and route content.
- `Frontend/src/assets` and `Frontend/public`: static assets.

Note: `Frontend/src/component/` also exists but current imports use `Frontend/src/components/`.

## Build, Test, and Development Commands
Run commands from each subproject directory.

- `cd Backend && npm install`: install backend dependencies.
- `cd Backend && npm run dev`: start API with nodemon and `.env` loading.
- `cd Backend && npm start`: run backend once without watcher.
- `cd Frontend && npm install`: install frontend dependencies.
- `cd Frontend && npm run dev`: start Vite dev server.
- `cd Frontend && npm run build`: create production bundle in `dist/`.
- `cd Frontend && npm run preview`: preview production build locally.
- `cd Frontend && npm run lint`: run ESLint for `js/jsx`.

## Coding Style & Naming Conventions
- Frontend follows ESLint (`Frontend/eslint.config.js`), 2-space indentation, JSX components in PascalCase (`DonateForm.jsx`).
- Backend currently uses ES modules with semicolons and double quotes; keep style consistent within touched files.
- Use clear route/model names and keep file names aligned with exports.
- Prefer small, focused components and route handlers over large mixed-purpose files.

## Testing Guidelines
- There is no active automated test suite yet.
- `Backend/npm test` currently exits with a placeholder error; do not rely on it.
- Minimum validation before PR: run `Frontend/npm run lint`, start both apps, and verify key flows (home routing, donation form submit, backend donor endpoints).
- When adding tests, colocate them near the feature (`*.test.js` / `*.test.jsx`) and document the run command in `package.json`.

## Commit & Pull Request Guidelines
- Existing history uses short, direct commit subjects (for example `Navbar`, `routes`).
- Prefer clearer messages going forward: `Frontend: add transparency board route`.
- Keep commits scoped to one concern.
- PRs should include: summary, changed areas (`Backend`/`Frontend`), manual test steps, related issue link, and screenshots for UI updates.

## Security & Configuration Tips
- Keep secrets in `Backend/.env`; never commit credentials or production tokens.
- Validate and sanitize request data in backend routes/utils before DB writes.
