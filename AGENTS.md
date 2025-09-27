# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages, layouts, and global styles (`app/globals.css`).
- `components/`: Reusable UI and feature components (kebab-case files, `.tsx`).
- `src/ai/`: Genkit setup and flows (e.g., `flows/classify-food-waste.ts`).
- `hooks/`, `lib/`: Client hooks and utilities (import via `@/` alias).
- `public/`: Static assets served at the site root.
- Config: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`.

## Build, Test, and Development Commands
- `npm run dev`: Start Next.js in dev mode on port 9002.
- `npm run build`: Production build (`.next/`).
- `npm run start`: Serve the production build.
- `npm run lint`: Run ESLint via Next.
- `npm run typecheck`: TypeScript checks without emitting.
- AI flows (run in a separate terminal):
  - `npm run genkit:dev`: Start Genkit runner for `src/ai/dev.ts`.
  - `npm run genkit:watch`: Same as above with watch mode.

## Coding Style & Naming Conventions
- TypeScript, React (function components). 2-space indentation, single quotes, semicolons.
- Filenames and route segments: kebab-case (e.g., `how-it-works/`, `impact-charts.tsx`).
- Components: PascalCase exports; variables/functions: camelCase.
- Styling: Tailwind CSS utility-first classes; prefer `cn()` from `@/lib/utils` for merges.
- Linting: Keep code `npm run lint` clean; run `npm run typecheck` before commits.

## Testing Guidelines
- A dedicated test framework is not configured yet. If adding tests, prefer:
  - Unit: Vitest + React Testing Library.
  - E2E: Playwright for App Router flows.
- Place tests near source files (`component.test.tsx`) or in `tests/`.
- Aim for coverage on business logic and critical UI.

## Commit & Pull Request Guidelines
- Commit messages: concise, imperative (e.g., "feat: add waste classifier flow").
- PRs must include: clear description, scope, screenshots for UI, and linked issues.
- Keep PRs focused and under ~300 LOC when possible; include `npm run lint && npm run typecheck` results.

## Security & Configuration Tips
- Secrets: use environment files (`.env.local`, `.env`) and never commit keys. `dotenv` is used by `src/ai/dev.ts`.
- Validate external inputs with `zod` as in AI flows.
- Before deploying, confirm `next.config.ts` and `apphosting.yaml` settings.
