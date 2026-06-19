import { useEffect, useRef } from 'react';
import './Programs.css';

const programs = [
  {
    icon: '🧑‍💼',
    title: 'One-on-One Career Counselling',
    desc: 'Personalised sessions with certified counsellors to understand strengths, interests, and the right career path — completely free of charge.',
  },
  {
    icon: '🧠',
    title: 'Psychometric Assessments',
    desc: 'Science-backed aptitude and personality tests to help discover careers that truly match who the student is.',
  },
  {
    icon: '🎓',
    title: 'College & Course Guidance',
    desc: 'Expert advice on choosing the right college, course, and entrance exams — from JEE and NEET to CLAT and beyond.',
  },
  {
    icon: '💰',
    title: 'Scholarship & Financial Aid',
    desc: 'Identification and application support for scholarships, government schemes, and education loans, ensuring money is never a barrier.',
  },
  {
    icon: '📄',
    title: 'Resume & Interview Prep',
    desc: 'Build a standout resume and sharpen interview skills through mock sessions guided by industry professionals.',
  },
  {
    icon: '✅',
    title: '100% Free — Always',
    desc: 'Every service, every session, every follow-up is provided at zero cost. No registration fee, no hidden charges.',
    highlight: true,
  },
];

export default function Programs() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="programs section-pad" id="programs" ref={ref}>
      <div className="container">
        <div className="programs-header reveal">
          <span className="section-label">03 — Programs</span>
          <h2 className="section-title">Our <span>Programs</span></h2>
          <p className="section-desc">
            FutureDots offers six core service areas, each designed to address a specific challenge students face during their career journey.
          </p>
        </div>
        <div className="programs-grid">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className={`program-card reveal${p.highlight ? ' highlight' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="program-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
