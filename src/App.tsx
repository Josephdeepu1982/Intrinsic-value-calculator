function App() {
  JSON.parse('this will break the app')

  return (
    <main className="app-shell">
      <section className="hero-card" aria-labelledby="app-title">
        <p className="eyebrow">Intrinsic Value Calculator</p>
        <h1 id="app-title">Hello World</h1>
        <p className="description">
          Phase 1 is live: the React, TypeScript, and Vite foundation is ready
          for the stock analysis experience.
        </p>
      </section>
    </main>
  )
}

export default App
