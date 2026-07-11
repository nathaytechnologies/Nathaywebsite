import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock } from 'lucide-react'
import './pages.css'

const TEAM_FALLBACK = [
  { name: 'Vishal Thorat', role: 'Founder & CEO', color: '#12B8A6' },
  { name: 'sofia shaikh', role: ' full stack Developer', color: '#2F6FED' },
  { name: 'Aishwarya kadu', role: 'frontend Developer', color: '#F2A93B' },
  { name: 'Neha Kulkarni', role: 'Head of Payroll Product', color: '#12B8A6' },
  { name: 'Farhan Ali', role: 'Lead DevOps Engineer', color: '#2F6FED' },
]

const OPENINGS_FALLBACK = [
  { title: 'Senior React Developer', type: 'Full-time', location: 'Mumbai / Remote' },
  { title: 'DevOps Engineer', type: 'Full-time', location: 'Mumbai' },
  { title: 'Product Designer', type: 'Full-time', location: 'Remote' },
  { title: 'Payroll Support Specialist', type: 'Full-time', location: 'Mumbai' },
]

export default function Team() {
  const [team, setTeam] = useState(TEAM_FALLBACK)
  const [openings, setOpenings] = useState(OPENINGS_FALLBACK)

  useEffect(() => {
    fetch('/api/team').then(r => r.ok ? r.json() : Promise.reject())
      .then(d => Array.isArray(d) && d.length && setTeam(d)).catch(() => {})
    fetch('/api/careers').then(r => r.ok ? r.json() : Promise.reject())
      .then(d => Array.isArray(d) && d.length && setOpenings(d)).catch(() => {})
  }, [])

  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Team &amp; Careers</span>
        <h1>The people behind Nathay Technologies</h1>
        <p>A small, senior team — every project is staffed by people who've shipped this exact kind of work before, not trainees learning on your budget.</p>
      </section>

      <section className="section-tight">
        <div className="container team-grid">
          {team.map((m, i) => (
            <div className="card team-card" key={i}>
              <div className="team-avatar" style={{ background: m.color }}>
                {m.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3>{m.name}</h3>
              <span>{m.role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Careers</span>
            <h2>Open roles at Nathay</h2>
            <p>We're a small team that hires slowly and cares a lot about who joins. If nothing fits, send us your resume anyway.</p>
          </div>
          <div className="openings-list">
            {openings.map((o, i) => (
              <div className="card opening-row" key={i}>
                <div>
                  <h3>{o.title}</h3>
                  <div className="opening-meta">
                    <span className="tag"><MapPin size={12} style={{ display: 'inline', marginRight: 4 }} />{o.location}</span>
                    <span className="tag"><Clock size={12} style={{ display: 'inline', marginRight: 4 }} />{o.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn btn-ghost btn-sm">Apply <ArrowRight size={15} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
