# Security Notes

## Secret Handling

- Keep all real secrets in local `.env` files or your hosting provider's secure
  environment variable settings.
- Never commit `.env`, service role keys, OAuth client secrets, or provider API
  keys to the repository.
- Treat `VITE_` variables as public because they are bundled into the client.

## Client And Server Boundaries

- The browser client should only access public configuration such as
  `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- Private integrations such as market data providers, AI providers, rate-limit
  credentials, and admin database access must stay on the server.
- Future valuation logic and provider normalization should run in server-side
  routes or functions so users cannot inspect private implementation details or
  abuse upstream providers directly.

## Deployment Review Checklist

- Verify production secrets are set only in Vercel project settings.
- Confirm no service-role credentials are exposed in client bundles.
- Review pull requests for accidental secret commits before merging.
