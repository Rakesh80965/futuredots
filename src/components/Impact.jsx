import { useEffect, useRef, useState } from 'react';
import './Impact.css';

const categories = ['All', 'Engineering', 'Medical', 'Design & Arts', 'Commerce', 'Government Jobs', 'Entrepreneurship'];

const stories = [
  { cat: 'Engineering', title: "Rahul's IIT Journey", desc: 'From uncertainty to IIT Bombay CSE — guided through JEE prep strategy and confidence building.' },
  { cat: 'Medical', title: 'Sneha Cracks NEET', desc: 'First-generation student guided into MBBS with scholarship support at a government medical college.' },
  { cat: 'Design & Arts', title: 'Priya Finds Her Stream', desc: 'Switched from science to design — now studying at NID Ahmedabad after honest counsellor guidance.' },
  { cat: 'Commerce', title: 'Campus Outreach 2024', desc: '800+ students counselled across 12 government schools in a single outreach drive.' },
  { cat: 'Government Jobs', title: "Arjun's UPSC Path", desc: 'Guided from confusion to a structured civil services preparation plan with clear milestones.' },
  { cat: 'Entrepreneurship', title: "Meera's Startup Dream", desc: 'Commerce student guided to discover startup ecosystem and the right MBA path.' },
];

export default function Impact() {
  const [active, setActive] = useState('All');
  const ref = useRef(null);

  const filtered = active === 'All' ? stories : stories.filter(s => s.cat === active);

  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="impact section-pad" id="impact" ref={ref}>
      <div className="container">
        <div className="impact-header reveal">
          <span className="section-label">05 — Impact</span>
          <h2 className="section-title">Real Students, <span>Real Outcomes</span></h2>
          <p className="section-desc">
            Verified success stories across multiple career streams, demonstrating the breadth of our impact.
          </p>
        </div>

        <div className="impact-filters reveal">
          {categories.map(c => (
            <button
              key={c}
              className={`filter-btn${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="impact-grid">
          {filtered.map((s, i) => (
            <div key={s.title} className="story-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <span className="story-cat">{s.cat}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
