import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import './pages.css'

const initialForm = { name: '', email: '', phone: '', service: 'Web & App Development', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    setStatus({ state: 'loading', msg: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus({ state: 'success', msg: "Thanks! We'll get back to you within one business day." })
      setForm(initialForm)
    } catch {
      setStatus({ state: 'error', msg: 'Something went wrong. Please email us directly at hello@nathaytechnologies.com.' })
    }
  }

  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Contact</span>
        <h1>Let's talk about what you're building</h1>
        <p>Fill in the form or reach out directly — we typically reply within one business day.</p>
      </section>

      <section className="section-tight">
        <div className="container contact-grid">
          <form className="card contact-form-card" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="Jane Doe" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Work email</label>
                <input id="email" type="email" name="email" required value={form.email} onChange={onChange} placeholder="jane@company.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Phone (optional)</label>
                <input id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="+91 98765 43210" />
              </div>
              <div className="form-field">
                <label htmlFor="service">What do you need?</label>
                <select id="service" name="service" value={form.service} onChange={onChange}>
                  <option>Web & App Development</option>
                  <option>Cloud & DevOps</option>
                  <option>AI & Software Consulting</option>
                  <option>Nathay Payroll</option>
                  <option>Something else</option>
                </select>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Tell us about your project</label>
              <textarea id="message" name="message" required value={form.message} onChange={onChange} placeholder="What are you trying to build or fix?" />
            </div>
            <button className="btn btn-primary btn-block" disabled={status.state === 'loading'}>
              {status.state === 'loading' ? 'Sending…' : 'Send Message'} <ArrowRight size={16} />
            </button>
            {status.msg && (
              <div className={'form-status ' + (status.state === 'success' ? 'success' : 'error')}>{status.msg}</div>
            )}
          </form>

          <div>
            <div className="contact-info-list">
              <div className="card contact-info-item">
                <div className="contact-info-icon"><Mail size={19} color="#12B8A6" /></div>
                <div>
                  <h4>Email</h4>
                  <p>nathaytechnologies@gmail.com</p>
                </div>
              </div>
              <div className="card contact-info-item">
                <div className="contact-info-icon"><Phone size={19} color="#12B8A6" /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 7385346634</p>
                </div>
              </div>
              <div className="card contact-info-item">
                <div className="contact-info-icon"><MapPin size={19} color="#12B8A6" /></div>
                <div>
                  <h4>Office</h4>
                  <p>Osmanpura,chhatrapati sambhajinagar, Maharashtra, India</p>
                </div>
              </div>
            </div>
            <div className="card map-panel">
              <svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="none">
                <rect width="400" height="200" fill="#EAF3FF" />
                <path d="M0 140 Q100 100 200 140 T400 130" stroke="#2F6FED" strokeWidth="3" fill="none" opacity="0.4" />
                <circle cx="220" cy="110" r="8" fill="#12B8A6" />
                <circle cx="220" cy="110" r="16" fill="#12B8A6" opacity="0.25" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
