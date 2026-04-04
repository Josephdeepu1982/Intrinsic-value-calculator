# UI Structure And Component Map

## Routes

- `/stocks/NVDA`: hardcoded mock stock details page used for layout validation.
- `/saved`: mock watchlist and holdings layout for authenticated-user flows.

## App Shell

- `Header`: placeholder brand, mock search input, and primary navigation.
- `App`: route container that sends the root path to the mock stock route.

## Stock Details Page

- `Summary card`: company identity, market price, intrinsic value, valuation gap, and CTA buttons.
- `Tab row`: mock segmented navigation for `Overview`, `Financials`, `Intrinsic Value`, and `Chart`.
- `Fundamentals grid`: placeholder metrics such as `P/E`, `PEG`, `FCF`, `ROE`, and revenue growth.
- `Chart grid`: reserved containers for revenue, free cash flow, net income, and price history visuals.
- `AI insights panel`: company summary, bull thesis, bear thesis, and moat explanation.
- `Review notes panel`: explicit disclaimer and mock-data safety reminders.

## Saved Items Page

- `Summary strip`: quick counts for watchlist items and holdings.
- `Watchlist cards`: placeholder list of saved research candidates.
- `Holdings table`: placeholder share count, cost basis, market value, and unrealized gain/loss.

## Copy Review Notes

- All user-facing content that is not real data is labeled as `Mock`, `Placeholder`, or both.
- The stock summary includes `Informational only, not financial advice.` to reduce ambiguity.
- The search field explicitly states that the demo routes to the hardcoded `NVDA` page.

## Mock Data Safety Notes

- The UI uses static local objects only; no secrets, tokens, provider keys, or internal prompts are embedded.
- Mock symbols, prices, and narratives are illustrative placeholders for UI structure review.
- Future server-side integrations should continue keeping private providers and valuation logic off the client.
