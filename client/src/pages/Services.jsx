import { Link } from 'react-router-dom'
import { Code2, Cloud, BrainCircuit, Wallet, ArrowRight, Check } from 'lucide-react'
import './pages.css'

const SERVICES = [
  {
    icon: Code2,
    title: 'Web & App Development',
    desc: 'Custom web platforms, dashboards and mobile apps built with React, React Native and Node.js.',
    points: ['Marketing sites & web apps', 'iOS / Android with React Native', 'API design & integrations', 'Design systems & UI kits'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'We set up infrastructure that scales quietly and stays up, with monitoring so nothing surprises you.',
    points: ['AWS / Azure / GCP setup', 'CI/CD pipelines', 'Docker & Kubernetes', '24/7 uptime monitoring'],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Software Consulting',
    desc: 'From roadmap to architecture, we help you decide what to build and where AI genuinely adds value.',
    points: ['Product & technical strategy', 'AI feature prototyping', 'Legacy system audits', 'Fractional CTO support'],
  },
  {
    icon: Wallet,
    title: 'Nathay Payroll',
    desc: 'Our in-house product for automated, compliant payroll — built and supported by our own team.',
    points: ['Automated monthly payroll runs', 'Statutory compliance filing', 'Employee self-service portal', 'Payslips & leave tracking'],
  },
]

const PROCESS = [
  { n: '01', t: 'Discover', d: 'We map your goals, constraints and users before writing a single line of code.' },
  { n: '02', t: 'Design', d: 'Wireframes and architecture reviewed with you, so there are no surprises later.' },
  { n: '03', t: 'Build', d: 'Weekly demos on working software, not slides — you always know where things stand.' },
  { n: '04', t: 'Support', d: 'Post-launch monitoring, fixes and iteration under a plan that matches your scale.' },
]

export default function Services() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Services</span>
        <h1>Full-stack technology partner, from idea to production</h1>
        <p>We combine product engineering, cloud operations and our own payroll product to cover everything a growing company needs from its tech partner.</p>
      </section>

      <section className="section-tight">
        <div className="container services-detail-grid">
          {SERVICES.map((s, i) => (
            <div className="card service-detail-card" key={i}>
              <div className="service-icon" style={{ background: i % 2 ? '#EAF3FF' : 'rgba(18,184,166,0.12)' }}>
                <s.icon size={22} color={i % 2 ? '#2F6FED' : '#12B8A6'} />
              </div>
              <h3 className="mt-16" style={{ fontSize: 20 }}>{s.title}</h3>
              <p className="text-muted mt-8">{s.desc}</p>
              <ul>
                {s.points.map((p, j) => (
                  <li key={j}><Check size={15} color="#12B8A6" style={{ flexShrink: 0, marginTop: 2 }} /> {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we work</span>
            <h2>A process built around visibility</h2>
            <p>No black boxes. You see progress every week and sign off before we move to the next stage.</p>
          </div>
          <div className="process-grid">
            {PROCESS.map((p, i) => (
              <div className="card process-step" key={i}>
                <span className="process-num">{p.n}</span>
                <h3 style={{ fontSize: 17 }}>{p.t}</h3>
                <p className="text-muted mt-8" style={{ fontSize: 14 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="cta-banner">
            <h2>Not sure which service you need?</h2>
            <p>Tell us what you're trying to build or fix — we'll point you in the right direction, even if that's not us.</p>
            <div className="hero-actions mt-32">
              <Link to="/contact" className="btn btn-primary">Book a Call <ArrowRight size={17} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
