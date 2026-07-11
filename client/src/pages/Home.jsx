import { Link } from 'react-router-dom'
import {
  Code2, Cloud, BrainCircuit, Wallet, ArrowRight, Star,
  CheckCircle2, ShieldCheck, Gauge, Layers
} from 'lucide-react'
import './home.css'

const SERVICES = [
  { icon: Code2, title: 'Web & App Development', desc: 'Custom websites, dashboards and mobile apps built on React, Node.js and modern frameworks.' },
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'AWS/Azure setup, CI/CD pipelines, containerisation and 24/7 infrastructure monitoring.' },
  { icon: BrainCircuit, title: 'AI & Software Consulting', desc: 'From product strategy to AI-assisted features, we help you ship the right thing fast.' },
  { icon: Wallet, title: 'Nathay Payroll', desc: 'Our in-house payroll product — automated salary runs, compliance and payslips.' },
]

const TESTIMONIALS = [
  { name: 'Rohan Mehta', role: 'Founder, Kadence Retail', quote: 'Nathay rebuilt our checkout flow in six weeks and our conversion rate jumped almost overnight.' },
  { name: 'Ayesha Khan', role: 'COO, Verto Logistics', quote: 'Their DevOps team took our deployment time from hours to minutes without a single late-night fire.' },
  { name: 'Daniel Fernandes', role: 'HR Head, Brightline Foods', quote: 'Switching payroll to Nathay Payroll removed three days of manual work every single month.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Software · Cloud · Payroll</span>
            <h1>
              <span>Technology that</span>
              <span className="grad-text">runs your business</span>
              <span>— not the other way round.</span>
            </h1>
            <p>
              Nathay Technologies designs and ships web &amp; mobile products, manages cloud
              infrastructure, and builds Nathay Payroll — the payroll system growing teams
              actually enjoy using.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Book a Call <ArrowRight size={17} /></Link>
              <Link to="/portfolio" className="btn btn-ghost">See Our Work</Link>
            </div>
            <div className="hero-clients">
              <span>Trusted by teams at</span>
              <div className="hero-clients-row">
                <span>Kadence</span><span>Verto</span><span>Brightline</span><span>Solace Health</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-art">
              <svg viewBox="0 0 500 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#12B8A6" />
                    <stop offset="100%" stopColor="#2F6FED" />
                  </linearGradient>
                </defs>
                <circle cx="250" cy="260" r="210" fill="url(#g1)" opacity="0.12" />
                <circle cx="330" cy="150" r="90" fill="url(#g1)" opacity="0.18" />
                <rect x="90" y="190" width="320" height="200" rx="24" fill="white" opacity="0.9" />
                <rect x="118" y="220" width="140" height="14" rx="7" fill="#E3E9F2" />
                <rect x="118" y="248" width="220" height="10" rx="5" fill="#EEF3FA" />
                <rect x="118" y="268" width="180" height="10" rx="5" fill="#EEF3FA" />
                <rect x="118" y="308" width="80" height="52" rx="12" fill="url(#g1)" opacity="0.85" />
                <rect x="210" y="308" width="80" height="52" rx="12" fill="#EAF3FF" />
                <rect x="302" y="308" width="80" height="52" rx="12" fill="#EAF3FF" />
              </svg>
            </div>

            <div className="hero-badge b1 pill"><Layers size={15} color="#12B8A6" /> Web &amp; App Dev</div>
            <div className="hero-badge b2 pill"><Cloud size={15} color="#2F6FED" /> Cloud &amp; DevOps</div>
            <div className="hero-badge b3 pill"><BrainCircuit size={15} color="#12B8A6" /> AI Consulting</div>
            <div className="hero-badge b4 pill"><Wallet size={15} color="#2F6FED" /> Payroll System</div>

            <div className="hero-stat-card">
              <div className="hero-stat-icon"><Gauge size={20} color="#fff" /></div>
              <div>
                <strong>99.9% Uptime</strong>
                <div className="stat-sub">Across 40+ production systems we manage</div>
                <div className="hero-stat-rating"><Star size={13} fill="#F2A93B" /> 4.9 client rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container trust-strip-row">
          <div className="trust-item"><strong>60+</strong><span>Products shipped</span></div>
          <div className="trust-item"><strong>40+</strong><span>Systems in production</span></div>
          <div className="trust-item"><strong>12</strong><span>Years combined team experience</span></div>
          <div className="trust-item"><strong>4.9/5</strong><span>Average client rating</span></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Four ways we help you move faster</h2>
            <p>From your first line of code to the infrastructure that keeps it running, we cover the full stack of a growing tech team.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div className="card service-card" key={i}>
                <div className="service-icon" style={{ background: i % 2 ? '#EAF3FF' : 'rgba(18,184,166,0.12)' }}>
                  <s.icon size={22} color={i % 2 ? '#2F6FED' : '#12B8A6'} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT: WHY US */}
      <section className="section-tight">
        <div className="container split">
          <div>
            <span className="eyebrow">Why teams choose Nathay</span>
            <h2>Engineering that ships, not just meetings that plan</h2>
            <div className="split-list">
              {[
                'Dedicated pod of engineers, not a rotating freelancer roster',
                'Weekly demos so you always see real, working software',
                'Security and compliance built in from day one',
                'Post-launch support plans, so nothing breaks quietly',
              ].map((t, i) => (
                <div className="split-list-item" key={i}>
                  <div className="split-list-icon"><CheckCircle2 size={16} color="#fff" /></div>
                  <p>{t}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-dark mt-32">More About Us <ArrowRight size={16} /></Link>
          </div>
          <div className="split-media">
            <div className="split-panel">
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg">
                <rect width="480" height="380" rx="20" fill="#F5F8FC" />
                <rect x="24" y="24" width="432" height="56" rx="14" fill="white" />
                <circle cx="52" cy="52" r="10" fill="#12B8A6" />
                <rect x="76" y="44" width="160" height="16" rx="8" fill="#E3E9F2" />
                <rect x="24" y="96" width="204" height="120" rx="16" fill="white" />
                <rect x="240" y="96" width="216" height="120" rx="16" fill="white" />
                <rect x="24" y="232" width="432" height="124" rx="16" fill="white" />
                <rect x="48" y="256" width="140" height="12" rx="6" fill="#EEF3FA" />
                <rect x="48" y="280" width="380" height="10" rx="5" fill="#EEF3FA" />
                <rect x="48" y="300" width="340" height="10" rx="5" fill="#EEF3FA" />
                <circle cx="330" cy="156" r="34" fill="url(#g1)" opacity="0.85" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT: PAYROLL PRODUCT */}
      <section className="section-tight">
        <div className="container split split-reverse">
          <div className="split-media">
            <div className="split-panel" style={{ background: 'var(--gradient-primary)' }}>
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg">
                <rect width="480" height="380" rx="20" fill="transparent" />
                <rect x="30" y="30" width="420" height="320" rx="18" fill="rgba(255,255,255,0.14)" />
                <rect x="54" y="58" width="160" height="18" rx="9" fill="rgba(255,255,255,0.5)" />
                <rect x="54" y="92" width="240" height="12" rx="6" fill="rgba(255,255,255,0.3)" />
                <rect x="54" y="140" width="372" height="64" rx="14" fill="rgba(255,255,255,0.16)" />
                <rect x="54" y="216" width="372" height="64" rx="14" fill="rgba(255,255,255,0.16)" />
                <rect x="78" y="162" width="120" height="10" rx="5" fill="rgba(255,255,255,0.55)" />
                <rect x="78" y="238" width="140" height="10" rx="5" fill="rgba(255,255,255,0.55)" />
                <rect x="330" y="158" width="70" height="24" rx="12" fill="white" opacity="0.9" />
                <rect x="330" y="234" width="70" height="24" rx="12" fill="white" opacity="0.9" />
              </svg>
            </div>
          </div>
          <div>
            <span className="eyebrow">Our product</span>
            <h2>Nathay Payroll — payroll on autopilot</h2>
            <p className="mt-16 text-muted" style={{ lineHeight: 1.7 }}>
              Built by the same team that runs your infrastructure, Nathay Payroll automates
              salary runs, tax and compliance filing, payslip generation and leave tracking —
              all from one clean dashboard.
            </p>
            <div className="split-list">
              {[
                'One-click monthly payroll runs',
                'Built-in statutory compliance for Indian payroll',
                'Employee self-service portal for payslips & leave',
              ].map((t, i) => (
                <div className="split-list-item" key={i}>
                  <div className="split-list-icon"><ShieldCheck size={16} color="#fff" /></div>
                  <p>{t}</p>
                </div>
              ))}
            </div>
            <Link to="/products" className="btn btn-primary mt-32">Explore Nathay Payroll <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-head center" style={{ marginInline: 'auto' }}>
            <span className="eyebrow">Client stories</span>
            <h2>Trusted by teams who need software that just works</h2>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="card testi-card" key={i}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">“{t.quote}”</p>
                <div className="testi-person">
                  <div className="testi-avatar">{t.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight">
        <div className="container">
          <div className="cta-banner">
            <h2>Have a product idea or a system that needs fixing?</h2>
            <p>Tell us where it hurts. We'll get back to you within one business day with a clear plan and a realistic timeline.</p>
            <div className="hero-actions mt-32">
              <Link to="/contact" className="btn btn-primary">Book a Call <ArrowRight size={17} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
