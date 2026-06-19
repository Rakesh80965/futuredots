import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    stars: 5,
    quote: '"I had no idea what to do after 12th. FutureDots gave me a free session that changed everything. I understood my strengths, chose B.Tech Computer Science, and got into my dream college. I owe this to them."',
    name: 'Rahul Gupta',
    role: 'B.Tech Student, IIT Bombay',
  },
  {
    stars: 5,
    quote: '"My family couldn\'t afford a career counsellor. FutureDots reached our school, ran a free session, and helped me find a scholarship I didn\'t even know existed. I\'m now studying MBBS at a government college."',
    name: 'Sneha Yadav',
    role: 'MBBS Student, Government Medical College',
  },
  {
    stars: 5,
    quote: '"I was pressured into science but hated it. One honest conversation with the FutureDots counsellor helped me switch to design. I got into NID and now I\'m doing what I love every day."',
    name: 'Priya Menon',
    role: 'Design Student, NID Ahmedabad',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const ref = useRef(null);

  const go = (idx) => {
    setCurrent((idx + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => go(current + 1), 5000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const t = testimonials[current];

  return (
    <section className="testimonials section-pad" id="testimonials" ref={ref}>
      <div className="container">
        <div className="testi-header reveal">
          <span className="section-label">07 — Student Stories</span>
          <h2 className="section-title">What Students <span>Say</span></h2>
        </div>
        <div className="testi-card reveal">
          <div className="testi-stars">{'★'.repeat(t.stars)}</div>
          <blockquote>{t.quote}</blockquote>
          <div className="testi-author">
            <strong>{t.name}</strong>
            <span>{t.role}</span>
          </div>
        </div>
        <div className="testi-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testi-dot${i === current ? ' active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
