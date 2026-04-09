# Contributing to LissanAI

Thank you for your interest in contributing!

## Development Setup

1. Fork and clone the repository
2. `npm install`
3. `cp .env.example .env.local` – fill in values
4. `npm run dev` – start the dev server at http://localhost:3000

## Code Style
- TypeScript strict mode enabled
- Named exports for all components
- Follow existing folder structure
- Run `npm run lint` before committing

## Pull Request Process
1. Create a branch from `main`: `git checkout -b feat/your-feature`
2. Make meaningful, atomic commits
3. Ensure `npm run build` passes
4. Open a PR with a clear description

## Commit Convention (Conventional Commits)
| Prefix | Use for |
|--------|---------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation |
| `style:` | Formatting only |
| `refactor:` | Code restructure |
| `perf:` | Performance |
| `test:` | Tests |
| `chore:` | Maintenance |
