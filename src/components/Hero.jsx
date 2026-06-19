import heroPhoto from '../assets/hero-photo.jpeg';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <img src={heroPhoto} alt="FutureDots counselling session" className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-label">✦ Free Career Counselling for Students</span>
        <h1 className="hero-title">
          Connect the <span>Dots</span><br />to Your Dream Career
        </h1>
        <p className="hero-sub">
          FutureDots provides free, expert-backed career counselling to students across India —
          personalised sessions, psychometric assessments, and ongoing mentorship, all at zero cost.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary"
            onClick={e => { e.preventDefault(); scrollTo('#contact'); }}>
            Book a Free Session
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item"><span>5,200+</span><p>Students Guided</p></div>
          <div className="divider" />
          <div className="stat-item"><span>96%</span><p>Satisfaction Rate</p></div>
          <div className="divider" />
          <div className="stat-item"><span>7+</span><p>Years of Service</p></div>
        </div>
      </div>
    </section>
  );
}

