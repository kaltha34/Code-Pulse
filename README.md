# CodePulse

GitHub PR & Repo Analytics for dev teams

## What is CodePulse?

CodePulse is a developer-focused analytics tool that ingests GitHub repository data (PRs, commits, issues, contributors) and provides clear, actionable visualizations and metrics: PR merge rates, review time, contributor activity, code frequency, and health signals.

## Project Structure

This repository is managed as a monorepo using Yarn Workspaces and Turborepo:

```
packages/
  ├── api/        # NestJS backend
  └── web/        # Next.js frontend
```

## Getting Started

### Prerequisites

- Node.js >= 18
- Docker & Docker Compose (for local development)
- PostgreSQL
- Redis

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment files:
   ```bash
   cp packages/api/.env.example packages/api/.env
   cp packages/web/.env.example packages/web/.env
   ```

3. Start the development servers:
   ```bash
   yarn dev
   ```

This will start:
- Backend at http://localhost:3001
- Frontend at http://localhost:3000

## Development Guidelines

### Branch Strategy

- `main`: Protected branch, requires PR approval
- `develop`: Main development branch
- Feature branches: `feat/*`
- Bug fixes: `fix/*`
- Hotfixes: `hotfix/*`
- Documentation: `docs/*`

### Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Tests
- chore: Maintenance

### Pull Request Process

1. Create branch from `develop`
2. Make your changes
3. Write/update tests
4. Create PR with proper description
5. Get approval
6. Squash merge to maintain clean history

## License

MIT