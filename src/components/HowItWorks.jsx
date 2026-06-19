import { useEffect, useRef, useState } from 'react';
import howItWorksBg from '../assets/how-it-works.jpeg';
import './HowItWorks.css';

const steps = [
  {
    num: '01',
    title: 'Book a Free Session',
    desc: 'Fill out a short form on the website or call directly. A counselling session is scheduled within 48 hours — at zero cost.',
    color: 'var(--r1)',
    shadow: 'rgba(251, 191, 36, 0.3)',
  },
  {
    num: '02',
    title: 'Assessment',
    desc: 'The student takes a psychometric and aptitude test to discover their strengths, personality type, and learning style.',
    color: 'var(--r3)',
    shadow: 'rgba(225, 29, 72, 0.3)',
  },
  {
    num: '03',
    title: 'Personalised Roadmap',
    desc: 'A counsellor builds a fully customised career plan — including the right courses, colleges, and milestones specific to the student.',
    color: 'var(--r5)',
    shadow: 'rgba(251, 191, 36, 0.3)',
  },
  {
    num: '04',
    title: 'Ongoing Mentorship',
    desc: 'FutureDots stays with the student — with follow-up sessions, scholarship alerts, and support right through to college admission.',
    color: 'var(--r6)',
    shadow: 'rgba(225, 29, 72, 0.3)',
  },
];

const THRESHOLDS = [0, 28, 56, 84];

export default function HowItWorks() {
  const outerRef = useRef(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [visible, setVisible] = useState([true, false, false, false]);

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 768;

    if (isMobile()) {
      setVisible([true, true, true, true]);
      setLineProgress(100);
      return;
    }

    const onScroll = () => {
      if (isMobile()) {
        setVisible([true, true, true, true]);
        setLineProgress(100);
        return;
      }
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(scrolled / scrollable, 1));
      const lp = progress * 100;
      setLineProgress(lp);
      setVisible(steps.map((_, i) => lp >= THRESHOLDS[i]));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="how-outer" id="process" ref={outerRef}>
      <div className="how-sticky">
        <img src={howItWorksBg} alt="" className="how-bg" />
        <div className="how-overlay" />
        <div className="how-inner">

          <div className="how-header">
            <span className="section-label">04 — Process</span>
            <h2 className="section-title">How It <span>Works</span></h2>
            <p className="section-desc">
              A simple four-step journey from first contact to a complete career roadmap.
            </p>
            <div className="how-progress-bar">
              <div className="how-progress-fill" style={{ width: lineProgress + '%' }} />
            </div>
          </div>

          <div className="how-steps-wrap">
            <div className="how-track">
              <div className="how-track-fill" style={{ height: lineProgress + '%' }} />
            </div>
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={'how-step' + (visible[i] ? ' visible' : '')}
                style={{ transitionDelay: visible[i] ? '0.1s' : '0s' }}
              >
                <div
                  className="step-circle"
                  style={{ background: s.color, boxShadow: '0 6px 20px ' + s.shadow }}
                >
                  {s.num}
                </div>
                <div className="step-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
