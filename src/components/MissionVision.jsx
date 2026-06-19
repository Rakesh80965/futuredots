import { useEffect, useRef } from 'react';
import visionMission from '../assets/vision-mission.jpeg';
import './MissionVision.css';

export default function MissionVision() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="mv section-pad" id="mission" ref={ref}>
      <div className="container">
        <div className="mv-header reveal">
          <span className="section-label">02 — Mission &amp; Vision</span>
          <h2 className="section-title">Mission &amp; <span>Vision</span></h2>
        </div>

        <div className="mv-grid">
          <div className="mv-image-wrap reveal">
            <img src={visionMission} alt="Our Vision and Mission" className="mv-image" />
            <div className="mv-image-glow" />
          </div>

          <div className="mv-cards-list">
            <div className="mv-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="mv-card-header">
                <span className="mv-icon">🎯</span>
                <h3>Our Mission</h3>
              </div>
              <p>
                To democratise career guidance in India by making high-quality, certified career counselling
                freely available to every student — regardless of their financial background, geography, or language.
              </p>
            </div>

            <div className="mv-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="mv-card-header">
                <span className="mv-icon">🔭</span>
                <h3>Our Vision</h3>
              </div>
              <p>
                A future where every student in India — from the most remote village to the most crowded city —
                has access to the guidance they need to make confident, informed career decisions.
              </p>
            </div>

            <div className="mv-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="mv-card-header">
                <span className="mv-icon">🌐</span>
                <h3>Our Reach</h3>
              </div>
              <p>
                Sessions are conducted in <strong>English, Hindi, and regional languages</strong>, both online
                and in-person, ensuring maximum reach. Certified counsellors hold 5–15 years of experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
