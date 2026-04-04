import { FormEvent, useState } from 'react'
import { NavLink, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { holdings, mockStock, stockTabs, watchlistItems } from './mockData.ts'

type NavItemProps = {
  to: string
  children: string
}

type ChartCardProps = {
  title: string
  subtitle: string
  data: Array<{
    label: string
    value: number
    formattedValue: string
  }>
}

type SummaryStatProps = {
  label: string
  value: string
}

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to={`/stocks/${mockStock.symbol}`} replace />} />
          <Route path="/stocks/:symbol" element={<StockDetailsPage />} />
          <Route path="/saved" element={<SavedStocksPage />} />
          <Route path="*" element={<Navigate to={`/stocks/${mockStock.symbol}`} replace />} />
        </Routes>
      </main>
    </div>
  )
}

function Header() {
  const navigate = useNavigate()
  const [query, setQuery] = useState(mockStock.symbol)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextQuery = query.trim().toUpperCase() || mockStock.symbol
    setQuery(nextQuery)
    navigate(`/stocks/${mockStock.symbol}`)
  }

  return (
    <header className="topbar">
      <div className="brand-block">
        <p className="eyebrow">Placeholder Brand</p>
        <div>
          <h1 className="brand-title">Intrinsic Value</h1>
          <p className="brand-copy">
            Mock desktop workspace for stock research and valuation review.
          </p>
        </div>
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="ticker-search">
          Search ticker or company
        </label>
        <input
          id="ticker-search"
          name="ticker-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search ticker or company"
          aria-describedby="search-help"
        />
        <button type="submit">Open mock stock</button>
        <p id="search-help" className="helper-copy">
          Demo search routes to the hardcoded `NVDA` stock details page.
        </p>
      </form>

      <nav className="topnav" aria-label="Primary">
        <NavItem to={`/stocks/${mockStock.symbol}`}>Stock details</NavItem>
        <NavItem to="/saved">Watchlist and holdings</NavItem>
      </nav>
    </header>
  )
}

function NavItem({ to, children }: NavItemProps) {
  return (
    <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to={to}>
      {children}
    </NavLink>
  )
}

function StockDetailsPage() {
  const { symbol } = useParams()
  const [activeTab, setActiveTab] = useState<(typeof stockTabs)[number]>('Overview')

  if (symbol?.toUpperCase() !== mockStock.symbol) {
    return <Navigate to={`/stocks/${mockStock.symbol}`} replace />
  }

  return (
    <div className="page-stack">
      <section className="summary-card panel" aria-labelledby="stock-title">
        <div className="summary-heading">
          <div>
            <p className="section-kicker">Stock details</p>
            <h2 id="stock-title">
              {mockStock.companyName} <span>{mockStock.symbol}</span>
            </h2>
            <p className="section-copy">
              {mockStock.exchange} • {mockStock.sector} • {mockStock.industry}
            </p>
          </div>

          <div className="summary-badges">
            <span className={`valuation-pill ${mockStock.valuationTone}`}>
              {mockStock.valuationLabel}
            </span>
            <span className="muted-pill">{mockStock.updatedAt}</span>
          </div>
        </div>

        <div className="summary-grid">
          <SummaryStat label="Market price" value={mockStock.marketPrice} />
          <SummaryStat label="Intrinsic value" value={mockStock.intrinsicValue} />
          <SummaryStat label="Valuation gap" value={mockStock.valuationGap} />
          <SummaryStat label="Confidence band" value={mockStock.confidenceBand} />
        </div>

        <div className="action-row">
          <button type="button" className="primary-button">
            Add to watchlist
          </button>
          <button type="button" className="secondary-button">
            Add to portfolio
          </button>
        </div>

        <div className="notice-row">
          <p className="notice-pill">Mock data only for layout review.</p>
          <p className="notice-pill">Informational only, not financial advice.</p>
        </div>
      </section>

      <div className="stock-layout">
        <div className="primary-column">
          <section className="panel" aria-labelledby="stock-tabs-title">
            <div className="panel-header">
              <div>
                <p className="section-kicker">Workspace tabs</p>
                <h3 id="stock-tabs-title">Research flow</h3>
              </div>
              <p className="panel-copy">{mockStock.tabSummaries[activeTab]}</p>
            </div>

            <div className="tab-row" role="tablist" aria-label="Stock details tabs">
              {stockTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={tab === activeTab ? 'tab-chip active' : 'tab-chip'}
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={tab === activeTab}
                >
                  {tab}
                </button>
              ))}
            </div>
          </section>

          <section className="panel" aria-labelledby="fundamentals-title">
            <div className="panel-header">
              <div>
                <p className="section-kicker">Fundamentals</p>
                <h3 id="fundamentals-title">Mock key metrics</h3>
              </div>
              <p className="panel-copy">
                Placeholder values show the intended information hierarchy for the MVP.
              </p>
            </div>

            <div className="metric-grid">
              {mockStock.fundamentals.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <p className="metric-label">{metric.label}</p>
                  <strong className="metric-value">{metric.value}</strong>
                  <p className="metric-helper">{metric.helper}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="panel" aria-labelledby="charts-title">
            <div className="panel-header">
              <div>
                <p className="section-kicker">Historical context</p>
                <h3 id="charts-title">Mock chart containers</h3>
              </div>
              <p className="panel-copy">
                Lightweight placeholder visuals reserve space for future chart integrations.
              </p>
            </div>

            <div className="chart-grid">
              <ChartCard
                title="Revenue"
                subtitle="Annual trend over the last five fiscal years"
                data={mockStock.charts.revenue}
              />
              <ChartCard
                title="Free cash flow"
                subtitle="Annual cash generation trend"
                data={mockStock.charts.freeCashFlow}
              />
              <ChartCard
                title="Net income"
                subtitle="Annual profitability trend"
                data={mockStock.charts.netIncome}
              />
              <ChartCard
                title="Price history"
                subtitle="Recent price context for the equity"
                data={mockStock.charts.priceHistory}
              />
            </div>
          </section>
        </div>

        <aside className="secondary-column">
          <section className="panel" aria-labelledby="ai-insights-title">
            <div className="panel-header">
              <div>
                <p className="section-kicker">AI insights</p>
                <h3 id="ai-insights-title">Qualitative framing</h3>
              </div>
              <p className="panel-copy">
                AI-generated summaries are mock placeholders and may be incomplete.
              </p>
            </div>

            <div className="insight-stack">
              <article className="insight-card">
                <h4>Company summary</h4>
                <p>{mockStock.aiSummary}</p>
              </article>
              <article className="insight-card">
                <h4>Bull thesis</h4>
                <p>{mockStock.bullThesis}</p>
              </article>
              <article className="insight-card">
                <h4>Bear thesis</h4>
                <p>{mockStock.bearThesis}</p>
              </article>
              <article className="insight-card">
                <div className="insight-card-header">
                  <h4>Moat explanation</h4>
                  <span className="muted-pill">{mockStock.moatStrength} moat</span>
                </div>
                <p>{mockStock.moatExplanation}</p>
              </article>
            </div>
          </section>

          <section className="panel" aria-labelledby="compliance-title">
            <div className="panel-header">
              <div>
                <p className="section-kicker">Review notes</p>
                <h3 id="compliance-title">Copy and data safety</h3>
              </div>
            </div>

            <ul className="checklist">
              <li>Every major panel is explicitly labeled as mock or placeholder content.</li>
              <li>No secrets, internal prompts, or provider-specific assumptions are embedded.</li>
              <li>The valuation summary includes a clear financial disclaimer for review builds.</li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  )
}

function SavedStocksPage() {
  return (
    <div className="page-stack">
      <section className="panel" aria-labelledby="saved-title">
        <div className="panel-header">
          <div>
            <p className="section-kicker">Saved workspace</p>
            <h2 id="saved-title">Mock watchlist and holdings</h2>
          </div>
          <p className="panel-copy">
            Placeholder tables show the intended saved-items experience for authenticated users.
          </p>
        </div>

        <div className="summary-grid">
          <SummaryStat label="Watchlist items" value={`${watchlistItems.length}`} />
          <SummaryStat label="Holdings" value={`${holdings.length}`} />
          <SummaryStat label="Largest gain" value="+19.2%" />
          <SummaryStat label="Largest gap" value="MSFT +8.0%" />
        </div>
      </section>

      <div className="saved-layout">
        <section className="panel" aria-labelledby="watchlist-title">
          <div className="panel-header">
            <div>
              <p className="section-kicker">Watchlist</p>
              <h3 id="watchlist-title">Saved research candidates</h3>
            </div>
          </div>

          <div className="watchlist-grid">
            {watchlistItems.map((item) => (
              <article key={item.symbol} className="watchlist-card">
                <div className="watchlist-card-header">
                  <div>
                    <h4>
                      {item.symbol} <span>{item.companyName}</span>
                    </h4>
                    <p>{item.note}</p>
                  </div>
                  <span className={`valuation-pill ${item.valuationTone}`}>{item.valuationLabel}</span>
                </div>
                <dl className="inline-stats">
                  <div>
                    <dt>Price</dt>
                    <dd>{item.marketPrice}</dd>
                  </div>
                  <div>
                    <dt>Intrinsic</dt>
                    <dd>{item.intrinsicValue}</dd>
                  </div>
                  <div>
                    <dt>Gap</dt>
                    <dd>{item.valuationGap}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" aria-labelledby="holdings-title">
          <div className="panel-header">
            <div>
              <p className="section-kicker">Holdings</p>
              <h3 id="holdings-title">Portfolio placeholder</h3>
            </div>
          </div>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Symbol</th>
                  <th scope="col">Shares</th>
                  <th scope="col">Avg cost</th>
                  <th scope="col">Current price</th>
                  <th scope="col">Market value</th>
                  <th scope="col">Unrealized P/L</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding) => (
                  <tr key={holding.symbol}>
                    <td>
                      <strong>{holding.symbol}</strong>
                      <span>{holding.companyName}</span>
                    </td>
                    <td>{holding.shares}</td>
                    <td>{holding.averageCost}</td>
                    <td>{holding.currentPrice}</td>
                    <td>{holding.marketValue}</td>
                    <td className={holding.performanceTone}>{holding.unrealizedGainLoss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

function SummaryStat({ label, value }: SummaryStatProps) {
  return (
    <article className="summary-stat">
      <p>{label}</p>
      <strong>{value}</strong>
    </article>
  )
}

function ChartCard({ title, subtitle, data }: ChartCardProps) {
  const maxValue = Math.max(...data.map((point) => point.value))

  return (
    <article className="chart-card">
      <div className="chart-card-header">
        <div>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
        <span className="muted-pill">Mock chart</span>
      </div>

      <div className="chart-bars" aria-hidden="true">
        {data.map((point) => (
          <div key={point.label} className="chart-bar-group">
            <div className="chart-bar-track">
              <div
                className="chart-bar"
                style={{ height: `${Math.max((point.value / maxValue) * 100, 18)}%` }}
              />
            </div>
            <p>{point.label}</p>
            <strong>{point.formattedValue}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}

export default App
