# Implementation TODO

This TODO list breaks the MVP into very small, AI-friendly implementation steps. Each step should be completed, reviewed, and kept deployable before moving to the next one.

## Working Rules
- [ ] Keep every PR/change small and focused on one outcome.
- [ ] Keep the app deployable after each completed step.
- [ ] Add or update documentation in the same step as the code change.
- [ ] Review security implications in every step before merging or deploying.
- [ ] Prefer mock data first, then replace with real integrations incrementally.

## Phase 1: Project Setup And First Deploy
- [ ] Initialize the project with `React + TypeScript + Vite`.
- [ ] Add a minimal app shell that renders a plain `Hello World` page.
- [ ] Add a basic global stylesheet and confirm the app starts locally.
- [ ] Create a simple `README.md` with local setup instructions.
- [ ] Add `.env.example` with placeholder environment variables and no secrets.
- [ ] Add a basic security note in the docs covering secret handling and client/server boundaries.
- [ ] Set up code formatting and linting.
- [ ] Set up CI/CD to run install, lint, and build on every push and pull request.
- [ ] Deploy the `Hello World` app to Vercel.
- [ ] Document the deployment URL and deployment steps.

## Phase 2: App Skeleton With Mock Data
- [ ] Replace `Hello World` with a basic desktop layout shell.
- [ ] Add a top navigation/header with a placeholder brand and search input.
- [ ] Add a stock details page route using a hardcoded mock symbol.
- [ ] Add a two-column stock details layout inspired by the PRD reference UI.
- [ ] Add a mock top summary card showing company name, ticker, price, intrinsic value, and valuation label.
- [ ] Add mock CTA buttons for `Add to watchlist` and `Add to portfolio`.
- [ ] Add mock tabs for `Overview`, `Financials`, `Intrinsic Value`, and `Chart`.
- [ ] Add a mock fundamentals card with placeholder metrics.
- [ ] Add a mock AI insights panel with company summary, bull thesis, bear thesis, and moat explanation.
- [ ] Add mock chart containers for revenue, free cash flow, net income, and price history.
- [ ] Add a mock watchlist/holdings page layout.
- [ ] Document the UI structure and component map in `docs/`.
- [ ] Review UI copy for financial disclaimers and placeholder labeling.
- [ ] Check that no mock data or debug values expose secrets or internal-only assumptions.
- [ ] Deploy the mock-data UI.

## Phase 3: Shared Foundations
- [ ] Define the frontend folder structure for pages, components, features, services, and types.
- [ ] Add a typed shared stock-analysis model for company profile, price, fundamentals, valuation, insights, and charts.
- [ ] Add a typed portfolio model for watchlist and holdings.
- [ ] Create a central API client wrapper for frontend requests.
- [ ] Create reusable loading, empty, and error states.
- [ ] Add an application-level error boundary.
- [ ] Add a reusable disclaimer component for financial and AI warnings.
- [ ] Document the frontend architecture and naming conventions.
- [ ] Review error handling to avoid leaking stack traces or provider details to users.

## Phase 4: Authentication
- [ ] Set up Supabase project configuration.
- [ ] Enable Google OAuth in Supabase.
- [ ] Add environment variable wiring for auth configuration.
- [ ] Add login page and `Continue with Google` flow.
- [ ] Add protected-route handling so unauthenticated users cannot access the app.
- [ ] Add session persistence and logout.
- [ ] Add a minimal authenticated app entry flow.
- [ ] Document auth setup and redirect URI configuration.
- [ ] Review OAuth callback handling, session storage, and secret placement.
- [ ] Deploy the auth-enabled app.

## Phase 5: Backend API Skeleton
- [ ] Set up Vercel serverless functions or API routes.
- [ ] Add a health-check endpoint.
- [ ] Add a typed backend response format for success and error payloads.
- [ ] Add a stock search endpoint returning mock results.
- [ ] Add a stock details endpoint returning mock data shaped like the final contract.
- [ ] Add backend input validation for symbol/search query parameters.
- [ ] Add basic rate limiting for public-facing endpoints.
- [ ] Document the API contract and example payloads.
- [ ] Review that secrets remain server-side only.
- [ ] Deploy the backend skeleton.

## Phase 6: Database And User Data Persistence
- [ ] Create database schema for users, watchlist items, and holdings.
- [ ] Add row-level security policies so users can access only their own data.
- [ ] Add backend helpers for watchlist CRUD.
- [ ] Add backend helpers for holdings CRUD.
- [ ] Connect watchlist UI to the backend with mock-safe fallback states.
- [ ] Connect holdings UI to the backend with create, edit, and delete flows.
- [ ] Show current gain/loss using mock price data first.
- [ ] Document the schema and data access rules.
- [ ] Review authorization checks and RLS coverage before deployment.
- [ ] Deploy portfolio persistence.

## Phase 7: Real Search
- [ ] Choose the initial market data provider for MVP search.
- [ ] Replace mock search results with real ticker and company autocomplete.
- [ ] Normalize provider search results into the app’s internal search model.
- [ ] Add debounce to the frontend search input.
- [ ] Add empty-state and no-match handling.
- [ ] Cache common search queries.
- [ ] Add fallback handling for provider rate limits or failures.
- [ ] Document provider limits and search behavior.
- [ ] Review abuse protection and query validation.
- [ ] Deploy real search.

## Phase 8: Real Company Profile And Price Data
- [ ] Fetch real company profile data from the chosen provider.
- [ ] Fetch end-of-day price data for the selected stock.
- [ ] Normalize exchange, sector, industry, and price fields.
- [ ] Replace the mock stock summary card with real data.
- [ ] Add stale-data labeling if fresh data is unavailable.
- [ ] Cache stock profile and price responses.
- [ ] Document data-source mappings for profile and price fields.
- [ ] Review provider response sanitization and error handling.
- [ ] Deploy real company summary data.

## Phase 9: Real Fundamentals
- [ ] Fetch annual fundamentals for up to 10 years.
- [ ] Normalize revenue, free cash flow, net income, `P/E`, `PEG`, `ROE`, and revenue growth.
- [ ] Handle missing, negative, or partial financial histories safely.
- [ ] Replace mock fundamentals with real values.
- [ ] Add user-friendly fallback copy when data is incomplete.
- [ ] Cache normalized fundamentals.
- [ ] Document field definitions and calculation assumptions.
- [ ] Review provider licensing and attribution requirements for fundamentals.
- [ ] Deploy real fundamentals.

## Phase 10: Real Charts
- [ ] Add a lightweight charting library.
- [ ] Render annual revenue chart from real data.
- [ ] Render annual free cash flow chart from real data.
- [ ] Render annual net income chart from real data.
- [ ] Render small historical price chart from real data.
- [ ] Add loading and no-data states for each chart.
- [ ] Optimize chart rendering for fast initial load.
- [ ] Document chart data sources and refresh cadence.
- [ ] Review third-party chart library security and bundle-size impact.
- [ ] Deploy real charts.

## Phase 11: DCF Valuation Engine
- [ ] Create a server-side valuation module for DCF.
- [ ] Implement normalized free cash flow input handling.
- [ ] Implement historical-growth trend extraction.
- [ ] Implement automated growth guardrails.
- [ ] Implement the 5-year forecast.
- [ ] Implement discounting with default MVP assumptions.
- [ ] Implement terminal value calculation.
- [ ] Implement per-share intrinsic value output.
- [ ] Add unit tests for each DCF calculation stage.
- [ ] Document DCF formulas, assumptions, and edge-case behavior.
- [ ] Review calculation safety for missing or nonsensical financial inputs.
- [ ] Deploy DCF valuation behind a feature flag if needed.

## Phase 12: Relative Valuation Engine
- [ ] Create a server-side valuation module for relative valuation.
- [ ] Add historical company multiple handling.
- [ ] Add sector/industry reference multiple handling.
- [ ] Add rules for profitable vs unstable-earnings companies.
- [ ] Add quality guardrails based on growth and profitability context.
- [ ] Produce a normalized per-share relative valuation result.
- [ ] Add unit tests for relative valuation rules.
- [ ] Document relative valuation logic and data dependencies.
- [ ] Review how provider gaps affect peer/sector calculations.
- [ ] Deploy relative valuation.

## Phase 13: Blended Intrinsic Value And Rating Bands
- [ ] Create the blended intrinsic value calculation using a 50/50 split.
- [ ] Implement valuation gap percentage calculation.
- [ ] Implement rating-band classification for significantly undervalued, undervalued, fairly valued, and overvalued.
- [ ] Replace mock intrinsic value display with live blended output.
- [ ] Add disclaimer placement near valuation output.
- [ ] Add tests for blend and rating-band thresholds.
- [ ] Document the rating-band definitions and why they were chosen.
- [ ] Review how the UI handles extreme or low-confidence outputs.
- [ ] Deploy live intrinsic value.

## Phase 14: AI Insights
- [ ] Select the initial AI provider and model.
- [ ] Create a server-side prompt builder using company profile and financial trends.
- [ ] Generate company summary output.
- [ ] Generate bull thesis output.
- [ ] Generate bear thesis output.
- [ ] Generate moat explanation output.
- [ ] Map moat explanation to `Weak`, `Moderate`, or `Strong`.
- [ ] Cache AI results per stock.
- [ ] Add safeguards for malformed or low-quality AI responses.
- [ ] Add a visible AI warning message in the UI.
- [ ] Document prompts, output schema, and safety guardrails.
- [ ] Review prompt injection, data leakage, and hallucination risk handling.
- [ ] Deploy AI insights.

## Phase 15: Watchlist And Holdings Completion
- [ ] Connect `Add to watchlist` from the stock page to real persistence.
- [ ] Add watchlist list view with remove action.
- [ ] Connect `Add to portfolio` to holdings create flow.
- [ ] Add holdings edit flow.
- [ ] Add holdings delete flow.
- [ ] Calculate current gain/loss from stored cost basis and current end-of-day price.
- [ ] Add optimistic UI or clear loading states for portfolio actions.
- [ ] Document portfolio behaviors and known MVP limitations.
- [ ] Review authorization and input validation for every user-data mutation.
- [ ] Deploy completed portfolio flows.

## Phase 16: Caching, Freshness, And Reliability
- [ ] Add Redis or equivalent managed cache.
- [ ] Cache search responses with short TTL.
- [ ] Cache profile and price data with daily refresh logic.
- [ ] Cache fundamentals with longer retention and refresh invalidation.
- [ ] Cache AI insights with controlled expiration.
- [ ] Add cron jobs for daily refresh tasks.
- [ ] Add provider fallback behavior where practical.
- [ ] Add structured logging for API and provider failures.
- [ ] Document cache policy and freshness guarantees.
- [ ] Review rate limits, retry behavior, and failure modes.
- [ ] Deploy the reliability layer.

## Phase 17: Security Hardening
- [ ] Review all environment variables and secret storage.
- [ ] Audit API routes for missing validation.
- [ ] Audit user data access paths for authorization gaps.
- [ ] Add CSRF/session review for auth flows if applicable to the chosen auth setup.
- [ ] Add dependency vulnerability scanning in CI.
- [ ] Add security headers and basic content security policy.
- [ ] Add logging/monitoring for suspicious traffic patterns.
- [ ] Document security assumptions and known risks.
- [ ] Fix any high-severity issues found before continuing.

## Phase 18: Testing
- [ ] Add unit tests for core UI utilities and shared helpers.
- [ ] Add unit tests for search/result normalization.
- [ ] Add unit tests for valuation engines.
- [ ] Add integration tests for auth-protected routes.
- [ ] Add integration tests for watchlist and holdings flows.
- [ ] Add integration tests for stock details data loading.
- [ ] Add end-to-end smoke tests for login, search, stock page, and portfolio flows.
- [ ] Add test fixtures for sample stocks with varied financial profiles.
- [ ] Document how to run tests locally and in CI.
- [ ] Review test coverage around financial calculations and auth boundaries.

## Phase 19: CI/CD Expansion
- [ ] Expand CI to run unit and integration tests.
- [ ] Add preview deployments for pull requests.
- [ ] Add branch protection or equivalent deployment gating.
- [ ] Add build-time environment validation.
- [ ] Add failure notifications for broken builds or deployments.
- [ ] Document the release process and rollback steps.
- [ ] Review that CI logs do not leak secrets or sensitive payloads.

## Phase 20: Final MVP Polish
- [ ] Review the UI against the PRD reference images and tighten spacing, hierarchy, and typography.
- [ ] Improve loading skeletons and empty states.
- [ ] Improve error messaging for missing data and provider issues.
- [ ] Add final legal disclaimers and source attribution in the UI.
- [ ] Review desktop responsiveness across common screen sizes.
- [ ] Review accessibility basics for keyboard navigation and contrast.
- [ ] Update `README.md` with full setup, architecture, deployment, and MVP scope notes.
- [ ] Update product docs with open decisions and known limitations.
- [ ] Run a final security pass.
- [ ] Run the full test suite.
- [ ] Deploy MVP release candidate.

## Nice-To-Have After MVP
- [ ] Add breakdown visibility for DCF vs relative valuation.
- [ ] Add quarterly financial views.
- [ ] Add mobile-responsive layout.
- [ ] Add additional metrics and peer comparison.
- [ ] Add analytics for product learning.
- [ ] Add migration path to a paid market-data provider.
