import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="flex items-center gap-12">
            <span className="footer-logo-badge">
  <img src="/logo.png" alt="Nathay Technologies" className="footer-logo-mark" />
</span>
            <span className="footer-brand-name">Nathay Technologies</span>
          </div>
          <p className="text-muted mt-16">
            We design, build and run software, cloud infrastructure and payroll products
            for businesses that are ready to scale.
          </p>
          <Link to="/contact" className="btn btn-primary btn-sm mt-24">Start a project</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Careers</Link></li>
            <li><Link to="/portfolio">Our Work</Link></li>
            <li><Link to="/blog">Insights</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Web &amp; App Development</Link></li>
            <li><Link to="/services">Cloud &amp; DevOps</Link></li>
            <li><Link to="/services">AI &amp; Software Consulting</Link></li>
            <li><Link to="/products">Nathay Payroll</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <ul>
            <li>nathaytechnologies@gmail.com</li>
            <li>+91 7385346634</li>
            <li>Chhatrapati Sambhajinagar,Maharashtra, India</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Nathay Technologies. All rights reserved.</span>
        <div className="flex gap-16 footer-legal">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}
