import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './navbar.css'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/portfolio', label: 'Work' },
  { to: '/about', label: 'About Us' },
  { to: '/team', label: 'Careers' },
  { to: '/blog', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      {/* Desktop: vertical pill rail on the left */}
      <aside className="nav-rail">
        <Link to="/" className="nav-logo" aria-label="Nathay Technologies home">
          <img src="/logo.png" alt="Nathay Technologies" className="nav-logo-mark" />
        </Link>
        <nav className="nav-rail-links">
          {LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => 'nav-pill' + (isActive ? ' active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-primary btn-sm nav-rail-cta">Book a Call</Link>
      </aside>

      {/* Mobile top bar */}
      <header className={'nav-topbar' + (scrolled ? ' scrolled' : '')}>
        <Link to="/" className="nav-logo-mobile">
          <img src="/logo.png" alt="Nathay Technologies" className="nav-logo-mark" />
          <span>Nathay Technologies</span>
        </Link>
        <button className="nav-burger" aria-label="Open menu" onClick={() => setOpen(true)}>
          <span /><span /><span />
        </button>
      </header>

      {/* Mobile overlay menu */}
      <div className={'nav-overlay' + (open ? ' open' : '')}>
        <div className="nav-overlay-top">
          <Link to="/" className="nav-logo-mobile" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="Nathay Technologies" className="nav-logo-mark" />
            <span>Nathay Technologies</span>
          </Link>
          <button className="nav-close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
        </div>
        <nav className="nav-overlay-links">
          {LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => 'nav-pill nav-pill-lg' + (isActive ? ' active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>Book a Call</Link>
      </div>
    </>
  )
}