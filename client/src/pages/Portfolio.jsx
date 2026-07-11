import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp } from 'lucide-react'
import './pages.css'

const FALLBACK = [
  { title: 'Kadence Retail — Checkout Rebuild', client: 'E-commerce', tags: ['React', 'Node.js', 'Stripe'], metric: '+34% conversion rate', color: '#12B8A6' },
  { title: 'Verto Logistics — Fleet Dashboard', client: 'Logistics', tags: ['React', 'AWS', 'WebSockets'], metric: '2hr → 4min deploys', color: '#2F6FED' },
  { title: 'Brightline Foods — Nathay Payroll rollout', client: 'FMCG', tags: ['Payroll', 'Compliance'], metric: '3 days saved / cycle', color: '#F2A93B' },
  { title: 'Solace Health — Patient Portal', client: 'Healthcare', tags: ['React Native', 'Node.js'], metric: '18k+ monthly active users', color: '#12B8A6' },
  { title: 'Orbit Finance — Cloud Migration', client: 'Fintech', tags: ['AWS', 'Kubernetes'], metric: '99.98% uptime', color: '#2F6FED' },
  { title: 'Marrow Studio — AI Content Tools', client: 'Media', tags: ['AI', 'Node.js'], metric: '5x content output', color: '#F2A93B' },
]

export default function Portfolio() {
  const [projects, setProjects] = useState(FALLBACK)

  useEffect(() => {
    fetch('/api/portfolio')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => Array.isArray(data) && data.length && setProjects(data))
      .catch(() => {})
  }, [])

  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Our Work</span>
        <h1>Case studies from real production systems</h1>
        <p>A look at products, platforms and payroll rollouts we've shipped for clients across retail, logistics, healthcare and fintech.</p>
      </section>

      <section className="section-tight">
        <div className="container portfolio-grid">
          {projects.map((p, i) => (
            <div className="card portfolio-card" key={i}>
              <div className="portfolio-thumb" style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}55)` }}>
                <svg width="70" height="70" viewBox="0 0 70 70">
                  <rect width="70" height="70" rx="18" fill={p.color} opacity="0.85" />
                  <rect x="18" y="20" width="34" height="6" rx="3" fill="white" opacity="0.9" />
                  <rect x="18" y="32" width="24" height="6" rx="3" fill="white" opacity="0.7" />
                  <rect x="18" y="44" width="28" height="6" rx="3" fill="white" opacity="0.5" />
                </svg>
              </div>
              <div className="portfolio-body">
                <div className="portfolio-tags">
                  <span className="tag">{p.client}</span>
                  {p.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
                </div>
                <h3>{p.title}</h3>
                <div className="portfolio-metric"><TrendingUp size={15} /> {p.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="cta-banner">
            <h2>Want results like these for your product?</h2>
            <p>Share what you're working on and we'll tell you honestly whether we're the right fit.</p>
            <div className="hero-actions mt-32">
              <Link to="/contact" className="btn btn-primary">Book a Call <ArrowRight size={17} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
