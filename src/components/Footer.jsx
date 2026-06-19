import logo from '../assets/logo.png';
import './Footer.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'How It Works', href: '#process' },
  { label: 'Impact', href: '#impact' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleLink = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="FutureDots" className="footer-logo" />
            <p>Free Career Counselling for Students across India. Every session. Zero cost. Always.</p>
          </div>
          <nav className="footer-nav">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
            ))}
          </nav>
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <a href="mailto:hello@futuredots.in">hello@futuredots.in</a>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <span>Mumbai, India</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 FutureDots NGO · All rights reserved</p>
          <p>Website Overview Document v1.0 · Confidential</p>
        </div>
      </div>
    </footer>
  );
}
