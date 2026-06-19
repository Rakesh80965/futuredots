import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'How It Works', href: '#process' },
  { label: 'Impact', href: '#impact' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo" onClick={e => handleLink(e, '#hero')}>
        <img src={logo} alt="FutureDots" />
      </a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {navLinks.map(l => (
          <li key={l.label}>
            <a href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={e => handleLink(e, '#contact')}>
            Book Free Session
          </a>
        </li>
      </ul>

      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
