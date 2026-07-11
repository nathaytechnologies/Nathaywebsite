import { Link } from 'react-router-dom'
import { Wallet, ArrowRight, ShieldCheck, Users, FileText, CalendarClock, Star } from 'lucide-react'
import './pages.css'

const FEATURES = [
  { icon: Wallet, title: 'One-click payroll runs', desc: 'Calculate salaries, deductions and reimbursements for your whole team in minutes, every month.' },
  { icon: ShieldCheck, title: 'Built-in compliance', desc: 'PF, ESI, PT and TDS handled automatically and kept current with the latest statutory rules.' },
  { icon: FileText, title: 'Instant payslips', desc: 'Auto-generated, branded payslips delivered to every employee the moment payroll is approved.' },
  { icon: CalendarClock, title: 'Leave & attendance', desc: 'Leave balances sync directly into payroll calculations — no manual reconciliation.' },
  { icon: Users, title: 'Employee self-service', desc: 'Employees view payslips, apply for leave and update details from their own portal.' },
]

const PLANS = [
  { name: 'Starter', price: '₹49', unit: '/ employee / month', features: ['Up to 25 employees', 'Payroll runs & payslips', 'Email support'] },
  { name: 'Growth', price: '₹79', unit: '/ employee / month', features: ['Up to 200 employees', 'Compliance filing included', 'Self-service portal', 'Priority support'], highlight: true },
  { name: 'Enterprise', price: 'Custom', unit: 'talk to sales', features: ['Unlimited employees', 'Custom integrations', 'Dedicated account manager'] },
]

export default function Products() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Product</span>
        <h1>Nathay Payroll — payroll that runs itself</h1>
        <p>Built by our own engineering team and used internally before we ever sold it, Nathay Payroll automates the parts of payroll that eat your HR team's week.</p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">Book a Demo <ArrowRight size={17} /></Link>
          <Link to="/services" className="btn btn-ghost">See Other Services</Link>
        </div>
      </section>

      <section className="section-tight">
        <div className="container stat-band">
          <div className="card"><strong>12,000+</strong><span>Payslips generated monthly</span></div>
          <div className="card"><strong>3 days</strong><span>Saved per payroll cycle</span></div>
          <div className="card"><strong>99.9%</strong><span>Calculation accuracy</span></div>
          <div className="card"><strong>4.9<Star size={14} fill="#F2A93B" style={{ display:'inline', marginLeft: 4, verticalAlign:'middle' }}/></strong><span>Average customer rating</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Features</span>
            <h2>Everything payroll, in one dashboard</h2>
            <p>No spreadsheets, no separate compliance tool, no chasing employees for details.</p>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {FEATURES.map((f, i) => (
              <div className="card service-card" key={i}>
                <div className="service-icon" style={{ background: i % 2 ? '#EAF3FF' : 'rgba(18,184,166,0.12)' }}>
                  <f.icon size={22} color={i % 2 ? '#2F6FED' : '#12B8A6'} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-head center" style={{ marginInline: 'auto' }}>
            <span className="eyebrow">Pricing</span>
            <h2>Simple pricing that scales with your team</h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {PLANS.map((p, i) => (
              <div
                className="card service-card"
                key={i}
                style={p.highlight ? { border: '2px solid var(--teal)', position: 'relative' } : undefined}
              >
                {p.highlight && <span className="tag" style={{ position: 'absolute', top: -12, background: 'var(--gradient-primary)', color: '#fff' }}>Most popular</span>}
                <h3 style={{ marginTop: p.highlight ? 8 : 0 }}>{p.name}</h3>
                <div className="mt-16" style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800 }}>{p.price}</span>
                  <span className="text-muted" style={{ fontSize: 13 }}>{p.unit}</span>
                </div>
                <ul style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {p.features.map((f, j) => (
                    <li key={j} className="text-muted" style={{ fontSize: 14 }}>• {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={'btn btn-block mt-24 ' + (p.highlight ? 'btn-primary' : 'btn-ghost')}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="cta-banner">
            <h2>See Nathay Payroll on your own data</h2>
            <p>We'll run a live demo with a sample of your team's data so you can see exactly how it fits.</p>
            <div className="hero-actions mt-32">
              <Link to="/contact" className="btn btn-primary">Book a Demo <ArrowRight size={17} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
