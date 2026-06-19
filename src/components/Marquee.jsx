import './Marquee.css';

const items = [
  '5,200+ Students Guided',
  '96% Satisfaction Rate',
  '7+ Years of Service',
  '100% Free — Always',
  'Online & In-Person',
  'Pan India Reach',
  'Certified Counsellors',
  'English · Hindi · Regional Languages',
];

export default function Marquee() {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot">●</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
