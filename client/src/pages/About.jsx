import { Link } from 'react-router-dom'
import { ArrowRight, Target, Heart, Zap } from 'lucide-react'
import './pages.css'

const VALUES = [
  { icon: Target, title: 'Outcomes over output', desc: 'We measure success by what changed for your business, not lines of code shipped.' },
  { icon: Heart, title: 'Honest partnership', desc: "If something isn't worth building, we'll tell you before you spend a rupee on it." },
  { icon: Zap, title: 'Move with urgency', desc: 'Weekly demos, fast feedback loops, and no six-month silences before you see anything.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">About Us</span>
        <h1>We started Nathay to build software the way we'd want it built for us</h1>
        <p>Nathay Technologies is a small, senior team of engineers and product people who've spent years shipping software for startups and mid-size companies — now we do it as our own studio.</p>
      </section>

      <section className="section-tight">
        <div className="container stat-band">
          <div className="card"><strong>2026</strong><span>Founded</span></div>
          <div className="card"><strong>10+</strong><span>Team members</span></div>
          <div className="card"><strong>20+</strong><span>Products delivered</span></div>
          <div className="card"><strong>3</strong><span>Industries served</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Our story</span>
            <h2>From a one-person freelance team to a full studio</h2>
            <p className="mt-16 text-muted" style={{ lineHeight: 1.7 }}>
              Nathay Technologies began as two engineers building websites for local businesses
              on the side. As requests grew from "just a website" to "run our infrastructure"
              and "fix our payroll headache," we built the team — and eventually the product —
              to match. Today we're a studio of developers, cloud engineers and a dedicated
              payroll team behind Nathay Payroll.
            </p>
            <Link to="/team" className="btn btn-dark mt-32">Meet the Team <ArrowRight size={16} /></Link>
          </div>
          <div className="split-media">
            <div className="split-panel">
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg">
                <rect width="480" height="380" rx="20" fill="#F5F8FC" />
                <circle cx="150" cy="150" r="70" fill="#12B8A6" opacity="0.18" />
                <circle cx="340" cy="240" r="90" fill="#2F6FED" opacity="0.15" />
                <rect x="60" y="220" width="160" height="120" rx="16" fill="white" />
                <rect x="240" y="60" width="180" height="120" rx="16" fill="white" />
                <rect x="80" y="248" width="110" height="10" rx="5" fill="#EEF3FA" />
                <rect x="80" y="268" width="90" height="10" rx="5" fill="#EEF3FA" />
                <rect x="262" y="88" width="130" height="10" rx="5" fill="#EEF3FA" />
                <rect x="262" y="108" width="100" height="10" rx="5" fill="#EEF3FA" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we believe</span>
            <h2>The principles behind how we work</h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {VALUES.map((v, i) => (
              <div className="card service-card" key={i}>
                <div className="service-icon" style={{ background: i % 2 ? '#EAF3FF' : 'rgba(18,184,166,0.12)' }}>
                  <v.icon size={22} color={i % 2 ? '#2F6FED' : '#12B8A6'} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="cta-banner">
            <h2>Curious if we're the right fit?</h2>
            <p>Book a short call — no pitch deck, just a conversation about what you're building.</p>
            <div className="hero-actions mt-32">
              <Link to="/contact" className="btn btn-primary">Book a Call <ArrowRight size={17} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
