import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer-wrapper">

      <div className="site-footer">

        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">

            <div className="footer-brand-header">
              <img
                src="/logo.png"
                alt="Nathay Technologies"
                className="footer-logo-mark"
              />

              <div>
                <h3 className="footer-brand-name">
                  Nathay Technologies
                </h3>

                <span className="footer-tagline">
                  Software • Cloud • Payroll
                </span>
              </div>
            </div>

            <p className="footer-description">
              We design, build and run software, cloud infrastructure and
              payroll products for businesses that are ready to scale.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary footer-btn"
            >
              Start a Project
            </Link>

          </div>

          {/* Company */}

          <div className="footer-col">
            <h4>Company</h4>

            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Careers</Link></li>
              <li><Link to="/portfolio">Our Work</Link></li>
              <li><Link to="/blog">Insights</Link></li>
            </ul>

          </div>

          {/* Services */}

          <div className="footer-col">
            <h4>Services</h4>

            <ul>
              <li><Link to="/services">Web & App Development</Link></li>
              <li><Link to="/services">Cloud & DevOps</Link></li>
              <li><Link to="/services">AI & Software Consulting</Link></li>
              <li><Link to="/products">Nathay Payroll</Link></li>
            </ul>

          </div>

          {/* Contact */}

          <div className="footer-col">

            <h4>Get in Touch</h4>

            <ul className="footer-contact">
              <li>📧 nathaytechnologies@gmail.com</li>
              <li>📞 +91 7385346634</li>
              <li>
                📍 Chhatrapati Sambhajinagar,
                Maharashtra, India
              </li>
            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Nathay Technologies.
            All rights reserved.
          </span>

          <div className="footer-legal">

            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}
