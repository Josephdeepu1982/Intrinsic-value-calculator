# Intrinsic Value Calculator

A desktop web MVP for evaluating whether a US-listed stock appears undervalued
or overvalued using a simplified intrinsic value workflow.

## Local Setup

### Prerequisites

- Node.js 22 or newer
- npm 10 or newer

### Install

```bash
npm install
```

### Run The App

```bash
npm run dev
```

The Vite dev server will print a local URL, typically `http://localhost:5173`.

### Quality Checks

```bash
npm run lint
npm run build
npm run format:check
```

## Environment Variables

Copy `.env.example` to `.env` and fill in real values only when a feature
requires them. Do not commit secrets.

## Deployment

Phase 1 includes Vercel-ready configuration and deployment notes in
`docs/deployment.md`. The production URL should be added there after the first
successful deploy.
