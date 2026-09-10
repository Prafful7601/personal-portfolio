import { useEffect } from 'react'
import './BrandingPage.css'

const services = [
  ['01', 'Profile optimization', 'A LinkedIn profile rebuilt around your positioning, credibility, and the audience you want to attract.'],
  ['02', 'Content strategy', 'Clear content pillars, useful formats, and a sustainable cadence built around what your audience responds to.'],
  ['03', 'Positioning & messaging', 'A sharper narrative for who you serve, what you believe, and why the right people should listen.'],
  ['04', 'Personal brand audits', 'A practical diagnostic of what is working, what is holding you back, and what to improve first.'],
]

const process = [
  ['01', 'Discovery', 'Goals, audience, and the gaps in your current presence.'],
  ['02', 'Positioning', 'A differentiated narrative that makes your expertise easier to understand.'],
  ['03', 'Content system', 'Pillars, formats, and a practical publishing rhythm.'],
  ['04', 'Growth loop', 'Consistent execution, performance review, and iteration.'],
]

const results = [
  {
    name: 'Bhavana Rani',
    role: 'Global Learning Strategy Leader, National Geographic Society',
    image: '/branding/bhavana-growth.png',
    metric: '+192%',
    label: 'impressions, 365 days',
    note: '141,082 total content impressions, alongside 379% follower growth over the same period.',
  },
  {
    name: 'Vijay Saini',
    role: 'Founder, Zstate AI',
    image: '/branding/vijay-saini-growth.png',
    metric: '+53%',
    label: 'follower growth, 14 days',
    note: '1,579 total followers, with the climb beginning after onboarding.',
  },
  {
    name: 'CA Ami Dhabalia',
    role: 'Compliance, NRI & Cross-Border Tax, Mahesh Dhabalia & Co.',
    image: '/branding/ami-dhabalia-growth.png',
    metric: '+52%',
    label: 'follower growth, 90 days',
    note: '8,713 total followers, with growth accelerating sharply through the most recent quarter.',
  },
  {
    name: 'Charu Agrawal',
    role: 'Entrepreneur, Ishin Fashions',
    image: '/branding/charu-analytics.png',
    metric: '+64.4%',
    label: 'content impressions, 3 months',
    note: '95,994 content impressions over the last three months.',
    contain: true,
  },
  {
    name: 'Prateek Tosniwal',
    role: 'Executive Director, MICS International & Founder, Ivy Growth Associates',
    image: '/branding/prateek-analytics.png',
    metric: '+42%',
    label: 'follower growth, 90 days',
    note: '40,026 total followers, with 11,820 followers gained in the last 90 days.',
  },
]

function BrandingPage() {
  useEffect(() => {
    document.title = 'LinkedIn Personal Branding | Prafful Gupta'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="brand-page">
      <header className="brand-nav">
        <a className="brand-page-identity" href="/" aria-label="Return to Prafful Gupta portfolio">
          <span>PG</span>
          <strong>Prafful Gupta</strong>
        </a>
        <a className="brand-back-link" href="/">← Portfolio home</a>
      </header>

      <main>
        <section className="brand-hero">
          <p className="brand-kicker">LinkedIn personal branding</p>
          <h1>Turn your LinkedIn profile into a page that creates momentum.</h1>
          <p className="brand-lede">For founders, consultants, and senior leaders who want clearer positioning, stronger content, and visibility that leads to real conversations.</p>
          <div className="brand-actions">
            <a className="brand-primary" href="mailto:praffulunabated@gmail.com">Work with Prafful</a>
            <a className="brand-secondary" href="#results">See results ↓</a>
          </div>
        </section>

        <section className="brand-section" id="services">
          <div className="brand-heading"><p>What I help with</p><h2>Strategy, not just posting.</h2></div>
          <div className="brand-service-grid">
            {services.map(([number, title, text]) => <article className="brand-service" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="brand-section brand-process-section">
          <div className="brand-heading"><p>How it works</p><h2>A simple, repeatable process.</h2></div>
          <div className="brand-process-grid">
            {process.map(([number, title, text]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="brand-section" id="results">
          <div className="brand-heading"><p>Selected results</p><h2>What the work looks like in practice.</h2><span className="brand-caption">Real LinkedIn analytics, shared with permission. Timeframes vary by client.</span></div>
          <div className="brand-results-grid">
            {results.map((result) => (
              <article className="brand-result" key={result.name}>
                <div className="brand-result-image"><img src={result.image} alt={`${result.name} LinkedIn analytics`} className={result.contain ? 'brand-image-contain' : ''} /></div>
                <div className="brand-result-copy"><p className="brand-role">{result.role}</p><h3>{result.name}</h3><div><strong>{result.metric}</strong><span>{result.label}</span></div><p>{result.note}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="brand-contact">
          <p>Let&apos;s build your presence</p>
          <h2>Ready to become easier to find, trust, and choose?</h2>
          <span>Tell me what you are building and where you want your LinkedIn presence to take you.</span>
          <div className="brand-actions"><a className="brand-primary" href="mailto:praffulunabated@gmail.com">praffulunabated@gmail.com</a><a className="brand-secondary" href="https://www.linkedin.com/in/prafful-gupta-67a3b0203/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div>
        </section>
      </main>

      <footer className="brand-footer">© {new Date().getFullYear()} Prafful Gupta · LinkedIn personal branding</footer>
    </div>
  )
}

export default BrandingPage
