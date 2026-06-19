import { useEffect, useRef } from 'react';
import './Team.css';

const members = [
  { emoji: '👨‍💼', name: 'Dr. Aryan Mehta', role: 'Founder & Chief Counsellor' },
  { emoji: '👩‍💼', name: 'Priya Sharma', role: 'Senior Career Counsellor' },
  { emoji: '🧑‍🎓', name: 'Rohan Verma', role: 'College Admissions Expert' },
  { emoji: '👩‍🔬', name: 'Sneha Patel', role: 'Psychometric Specialist' },
];

export default function Team() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="team section-pad" id="team" ref={ref}>
      <div className="container">
        <div className="team-header reveal">
          <span className="section-label">06 — Team</span>
          <h2 className="section-title">Our <span>Counselling Team</span></h2>
          <p className="section-desc">
            FutureDots is powered by a dedicated team of certified counsellors and subject-matter experts who genuinely care about student outcomes.
          </p>
        </div>
        <div className="team-grid">
          {members.map((m, i) => (
            <div key={m.name} className="team-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="team-avatar">{m.emoji}</div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
