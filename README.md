# Node.js HTTP Server with Full CI/CD Automation

A minimal yet production-realistic Node.js + TypeScript HTTP server with a complete end-to-end CI/CD pipeline.

1. Push to `main` or `dev` branch.
2. code is automatically checked (format, lint, type-check, tests).
3. Docker image is built and pushed to GHCR.
4. your server updates itself instantly with zero downtime.
   No SSH, no manual pulls, no restarts after the initial setup.

## Features

- TypeScript + node:http server
- Prettier, ESLint, vitest
- GitHub Actions: full checks → Docker build → push to GHCR
- Watchtower for automatic container updates
- Single-command deployment with the provided compose.yml

## Recommended: Fork First

Fork this repository to your own GitHub account.
This ensures the CI/CD pipeline and image path will always point to your own repo and GHCR packages, even if the original repo disappears.

After forking, edit the file `compose.yml` in your forked repo and replace `vsadeghy/cicd` with your actual GitHub username/repo as the ghcr image will be built from that.

## One-Time Deployment (super simple)

1. SSH into your server (Docker + Docker Compose must be installed)
2. Create a directory for the app

```bash
    mkdir ~/node-cicd-demo && cd ~/node-cicd-demo
```

3. Copy the file `compose.yml` into this directory
4. Start everything

```bash
   docker compose up -d
```

That’s it.

# Node.js HTTP Server with Full CI/CD Automation

A minimal yet production-realistic Node.js + TypeScript HTTP server with a complete end-to-end CI/CD pipeline.

1. Push to `main` or `dev` branch.
2. code is automatically checked (format, lint, type-check, tests).
3. Docker image is built and pushed to GHCR.
4. your server updates itself instantly with zero downtime.
   No SSH, no manual pulls, no restarts after the initial setup.

## Features

- TypeScript + node:http server
- Prettier, ESLint, vitest
- GitHub Actions: full checks → Docker build → push to GHCR
- Watchtower for automatic container updates
- Single-command deployment with the provided compose.yml

## Recommended: Fork First

Fork this repository to your own GitHub account.
This ensures the CI/CD pipeline and image path will always point to your own repo and GHCR packages, even if the original repo disappears.

After forking, edit the file `compose.yml` in your forked repo and replace `vsadeghy/cicd` with your actual GitHub username/repo as the ghcr image will be built from that.

## One-Time Deployment (super simple)

1. SSH into your server (Docker + Docker Compose must be installed)
2. Create a directory for the app

```bash
    mkdir ~/node-cicd-demo && cd ~/node-cicd-demo
```

3. Copy the file `compose.yml` into this directory
4. Start everything

```bash
   docker compose up -d
```

That’s it.
The app will be available on http://localhost:3000 and will update itself automatically every time you push to main.

## CI/CD Pipeline

The workflow in `.github/workflows/ci.yml` runs on every push to main:

- Install dependencies
- Format check (prettier --check)
- Lint (eslint)
- TypeScript type-check (tsc --noEmit)
- Tests (vitest)
- Docker build & push to `ghcr.io/${{ github.repository }}:latest`
- Watchtower detects the new image and restarts the container seamlessly

## Local Development

```bash
pnpm install
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
```

## npm Scripts

| Script       | Description                 |
| ------------ | --------------------------- |
| build        | Compile TypeScript to JS    |
| start:prod   | Start the compiled JS app   |
| lint         | Check linting               |
| lint:fix     | Fix lint errors with ESLint |
| format       | Format code with Prettier   |
| format:check | Check formatting            |
| typecheck    | Check Typescript types      |
| test         | Run vitest tests            |

Push code → watch it deploy itself. Enjoy!
