import { useEffect, useRef } from 'react';
import './About.css';

const stats = [
  { value: '5,200+', label: 'Students Guided' },
  { value: '96%', label: 'Satisfaction Rate' },
  { value: '7+', label: 'Years of Service' },
];

function useCounter(ref, target, duration = 2000) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const numericStr = target.replace(/[^0-9.]/g, '');
      const suffix = target.replace(/[0-9.,]/g, '');
      const end = parseFloat(numericStr.replace(',', ''));
      const start = 0;
      const step = (end / duration) * 16;
      let current = start;
      const tick = () => {
        current += step;
        if (current >= end) {
          el.textContent = target;
          return;
        }
        el.textContent = (current >= 1000 ? Math.floor(current).toLocaleString() : Math.floor(current)) + suffix;
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, target, duration]);
}

function StatCard({ value, label }) {
  const ref = useRef(null);
  useCounter(ref, value);
  return (
    <div className="about-stat-card">
      <span ref={ref} className="stat-value">0</span>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
    }, { threshold: 0.15 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about section-pad" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal">
            <span className="section-label">01 — About</span>
            <h2 className="section-title">About <span>FutureDots</span></h2>
            <p className="section-desc">
              FutureDots is a registered non-profit organisation (NGO) founded in 2017 with a single, powerful belief:
              <em> no student should miss their dream career simply because they lacked the right guidance or couldn't afford a counsellor.</em>
            </p>
            <p className="section-desc" style={{ marginTop: '1rem' }}>
              Operating across schools and colleges throughout India, FutureDots provides free, expert-backed career
              counselling to students in 12th grade and college. We bridge the gap between student potential and career
              opportunity through personalised sessions, psychometric assessments, and ongoing mentorship — all at zero cost.
            </p>
          </div>
          <div className="about-stats reveal">
            {stats.map(s => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
