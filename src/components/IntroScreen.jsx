import { useState, useEffect, useRef } from 'react';
import logoAnimation from '../assets/logo-animation.mp4';
import './IntroScreen.css';

export default function IntroScreen({ onComplete }) {
  const [fading, setFading] = useState(false);
  const doneFired = useRef(false);

  const finish = () => {
    if (doneFired.current) return;
    doneFired.current = true;
    setFading(true);
    setTimeout(onComplete, 750);
  };

  useEffect(() => {
    // Fallback: finish after 5s in case video doesn't fire onEnded
    const t = setTimeout(finish, 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`intro-screen${fading ? ' fading' : ''}`}>
      <video
        src={logoAnimation}
        autoPlay
        muted
        playsInline
        onEnded={finish}
        className="intro-video"
      />
    </div>
  );
}
