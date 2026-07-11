import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import './pages.css'

const BLOG_FALLBACK = [
  { title: 'Why we moved every client from cron jobs to managed queues', tag: 'Engineering', date: 'Jun 2026', color: '#12B8A6' },
  { title: 'A founder\'s guide to payroll compliance in India', tag: 'Payroll', date: 'May 2026', color: '#2F6FED' },
  { title: 'What we actually use AI for in client projects', tag: 'AI', date: 'May 2026', color: '#F2A93B' },
  { title: 'Cutting a client\'s AWS bill by 40% without downtime', tag: 'Cloud', date: 'Apr 2026', color: '#12B8A6' },
  { title: 'Design reviews that don\'t turn into a two-week detour', tag: 'Product', date: 'Mar 2026', color: '#2F6FED' },
  { title: 'The payroll mistakes that cost founders the most', tag: 'Payroll', date: 'Mar 2026', color: '#F2A93B' },
]

const TESTIMONIALS_FALLBACK = [
  { name: 'Rohan Mehta', role: 'Founder, Kadence Retail', quote: 'Nathay rebuilt our checkout flow in six weeks and our conversion rate jumped almost overnight.' },
  { name: 'Ayesha Khan', role: 'COO, Verto Logistics', quote: 'Their DevOps team took our deployment time from hours to minutes without a single late-night fire.' },
  { name: 'Daniel Fernandes', role: 'HR Head, Brightline Foods', quote: 'Switching payroll to Nathay Payroll removed three days of manual work every single month.' },
  { name: 'Meera Joshi', role: 'Product Lead, Solace Health', quote: 'They pushed back on features we thought we needed and were right to. Cleaner product, faster launch.' },
]

export default function Blog() {
  const [posts, setPosts] = useState(BLOG_FALLBACK)
  const [testimonials, setTestimonials] = useState(TESTIMONIALS_FALLBACK)

  useEffect(() => {
    fetch('/api/blog').then(r => r.ok ? r.json() : Promise.reject())
      .then(d => Array.isArray(d) && d.length && setPosts(d)).catch(() => {})
    fetch('/api/testimonials').then(r => r.ok ? r.json() : Promise.reject())
      .then(d => Array.isArray(d) && d.length && setTestimonials(d)).catch(() => {})
  }, [])

  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Insights</span>
        <h1>Notes from the team building your software</h1>
        <p>Short, practical write-ups on engineering, payroll and running a lean tech studio — no fluff, no gated PDFs.</p>
      </section>

      <section className="section-tight">
        <div className="container blog-grid">
          {posts.map((p, i) => (
            <div className="card blog-card" key={i}>
              <div className="blog-thumb" style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}55)` }} />
              <div className="blog-body">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <div className="blog-meta">
                  <span>{p.date}</span> <span>·</span> <span>5 min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center" style={{ marginInline: 'auto' }}>
            <span className="eyebrow">Testimonials</span>
            <h2>What clients say after we ship</h2>
          </div>
          <div className="testimonials-full-grid">
            {testimonials.map((t, i) => (
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
    </>
  )
}
