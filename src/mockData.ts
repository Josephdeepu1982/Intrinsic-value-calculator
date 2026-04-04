export const stockTabs = ['Overview', 'Financials', 'Intrinsic Value', 'Chart'] as const

type StockTab = (typeof stockTabs)[number]
type ValuationTone = 'positive' | 'balanced' | 'negative'
type PerformanceTone = 'positive-text' | 'negative-text'

type ChartPoint = {
  label: string
  value: number
  formattedValue: string
}

type WatchlistItem = {
  symbol: string
  companyName: string
  note: string
  marketPrice: string
  intrinsicValue: string
  valuationGap: string
  valuationLabel: string
  valuationTone: ValuationTone
}

type HoldingItem = {
  symbol: string
  companyName: string
  shares: string
  averageCost: string
  currentPrice: string
  marketValue: string
  unrealizedGainLoss: string
  performanceTone: PerformanceTone
}

export const mockStock: {
  symbol: string
  companyName: string
  exchange: string
  sector: string
  industry: string
  marketPrice: string
  intrinsicValue: string
  valuationGap: string
  confidenceBand: string
  valuationLabel: string
  valuationTone: ValuationTone
  updatedAt: string
  tabSummaries: Record<StockTab, string>
  fundamentals: Array<{
    label: string
    value: string
    helper: string
  }>
  aiSummary: string
  bullThesis: string
  bearThesis: string
  moatStrength: string
  moatExplanation: string
  charts: {
    revenue: ChartPoint[]
    freeCashFlow: ChartPoint[]
    netIncome: ChartPoint[]
    priceHistory: ChartPoint[]
  }
} = {
  symbol: 'NVDA',
  companyName: 'NVIDIA Corporation',
  exchange: 'NASDAQ',
  sector: 'Information Technology',
  industry: 'Semiconductors',
  marketPrice: '$938.10',
  intrinsicValue: '$1,040.00',
  valuationGap: '+10.9%',
  confidenceBand: 'Base case',
  valuationLabel: 'Undervalued',
  valuationTone: 'positive',
  updatedAt: 'Mock FY2025 refresh',
  tabSummaries: {
    Overview: 'Highlights the market snapshot, qualitative context, and overall valuation stance.',
    Financials: 'Surfaces the core metrics that support the current price versus value story.',
    'Intrinsic Value':
      'Reserves space for a future DCF, multiple-based estimate, and blended fair value explanation.',
    Chart: 'Shows where historical trend visualizations will live once real data sources are connected.',
  },
  fundamentals: [
    {
      label: 'P/E',
      value: '64.2x',
      helper: 'Premium multiple reflecting elevated growth expectations.',
    },
    {
      label: 'PEG',
      value: '1.6x',
      helper: 'Indicates growth-adjusted valuation still needs execution support.',
    },
    {
      label: 'Free cash flow',
      value: '$29.8B',
      helper: 'Annualized placeholder showing strong cash conversion.',
    },
    {
      label: 'ROE',
      value: '58.4%',
      helper: 'Signals efficient use of capital in the mock profile.',
    },
    {
      label: 'Revenue growth',
      value: '+68%',
      helper: 'Represents strong demand expansion in data center workloads.',
    },
    {
      label: 'Gross margin',
      value: '74.8%',
      helper: 'Extra placeholder metric to enrich the summary card layout.',
    },
  ],
  aiSummary:
    'NVIDIA is shown here as a leading accelerated-computing platform with demand driven by AI infrastructure, gaming, and enterprise software ecosystems.',
  bullThesis:
    'The mock upside case assumes sustained AI capital spending, pricing power in flagship chips, and continued ecosystem lock-in from CUDA and software tooling.',
  bearThesis:
    'The placeholder downside case centers on cyclical spending pauses, rising competition from hyperscaler custom silicon, and valuation compression if growth normalizes.',
  moatStrength: 'Strong',
  moatExplanation:
    'The mock moat narrative points to a durable developer ecosystem, deep customer switching costs, and scale advantages across silicon design and software integration.',
  charts: {
    revenue: [
      { label: 'FY21', value: 16.7, formattedValue: '$16.7B' },
      { label: 'FY22', value: 26.9, formattedValue: '$26.9B' },
      { label: 'FY23', value: 27, formattedValue: '$27.0B' },
      { label: 'FY24', value: 60.9, formattedValue: '$60.9B' },
      { label: 'FY25', value: 91.5, formattedValue: '$91.5B' },
    ],
    freeCashFlow: [
      { label: 'FY21', value: 4.7, formattedValue: '$4.7B' },
      { label: 'FY22', value: 8.1, formattedValue: '$8.1B' },
      { label: 'FY23', value: 3.8, formattedValue: '$3.8B' },
      { label: 'FY24', value: 27.2, formattedValue: '$27.2B' },
      { label: 'FY25', value: 29.8, formattedValue: '$29.8B' },
    ],
    netIncome: [
      { label: 'FY21', value: 4.3, formattedValue: '$4.3B' },
      { label: 'FY22', value: 9.8, formattedValue: '$9.8B' },
      { label: 'FY23', value: 4.4, formattedValue: '$4.4B' },
      { label: 'FY24', value: 29.8, formattedValue: '$29.8B' },
      { label: 'FY25', value: 35.1, formattedValue: '$35.1B' },
    ],
    priceHistory: [
      { label: 'Jan', value: 710, formattedValue: '$710' },
      { label: 'Mar', value: 784, formattedValue: '$784' },
      { label: 'May', value: 861, formattedValue: '$861' },
      { label: 'Jul', value: 905, formattedValue: '$905' },
      { label: 'Sep', value: 938, formattedValue: '$938' },
    ],
  },
}

export const watchlistItems: WatchlistItem[] = [
  {
    symbol: 'MSFT',
    companyName: 'Microsoft',
    note: 'Watch for Azure growth durability and margin expansion.',
    marketPrice: '$428.40',
    intrinsicValue: '$462.70',
    valuationGap: '+8.0%',
    valuationLabel: 'Fairly Valued',
    valuationTone: 'balanced',
  },
  {
    symbol: 'AMZN',
    companyName: 'Amazon',
    note: 'Retail margins and AWS reacceleration remain the main checks.',
    marketPrice: '$191.80',
    intrinsicValue: '$214.30',
    valuationGap: '+11.7%',
    valuationLabel: 'Undervalued',
    valuationTone: 'positive',
  },
  {
    symbol: 'COST',
    companyName: 'Costco',
    note: 'High-quality compounder with a premium multiple to monitor.',
    marketPrice: '$801.10',
    intrinsicValue: '$744.60',
    valuationGap: '-7.1%',
    valuationLabel: 'Fairly Valued',
    valuationTone: 'balanced',
  },
]

export const holdings: HoldingItem[] = [
  {
    symbol: 'NVDA',
    companyName: 'NVIDIA',
    shares: '18',
    averageCost: '$786.20',
    currentPrice: '$938.10',
    marketValue: '$16,885.80',
    unrealizedGainLoss: '+$2,734.20',
    performanceTone: 'positive-text',
  },
  {
    symbol: 'META',
    companyName: 'Meta Platforms',
    shares: '12',
    averageCost: '$498.30',
    currentPrice: '$460.40',
    marketValue: '$5,524.80',
    unrealizedGainLoss: '-$454.80',
    performanceTone: 'negative-text',
  },
]
