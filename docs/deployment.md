# Deployment Notes

## Current Production URL

`https://intrinsic-value-calculator-black.vercel.app`

Latest deployment URL:
`https://intrinsic-value-calculator-ir6tntb1h.vercel.app`

## Vercel Deployment Steps

1. Sign in to Vercel and link the local project if it is not already linked.
2. From the repo root, run `npx vercel --prod --yes --name intrinsic-value-calculator`.
3. Keep the framework preset as `Vite` when Vercel auto-detects the project.
4. Add any required environment variables from `.env.example` in the Vercel
   project settings before deploying future features that need them.
5. Use the default build command `npm run build`.
6. Use the default output directory `dist`.
7. Confirm the production deployment loads successfully at the project domain.
8. If you want GitHub-based automatic Vercel deploys, add a GitHub login
   connection inside the Vercel account settings before linking the repository.

## CI Expectations

The GitHub Actions workflow in `.github/workflows/ci.yml` runs install, lint,
format checking, and build on pushes and pull requests so deployment issues are
caught before release.
