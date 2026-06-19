import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const src = join(__dir, 'src');
const comp = join(src, 'components');

// ── index.css ──────────────────────────────────────────────────────────────
writeFileSync(join(src, 'index.css'), `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap');

:root {
  --bg:    #ffffff;
  --bg2:   #fafbff;
  --bg3:   #f4f6fb;
  --text:        #1a1a2e;
  --text-light:  #4a4a6a;
  --text-muted:  #9090aa;
  --card-bg:     #ffffff;
  --border:      rgba(0, 0, 0, 0.08);
  --shadow-sm:   0 2px 12px rgba(0, 0, 0, 0.06);
  --shadow-md:   0 8px 30px rgba(0, 0, 0, 0.10);
  --shadow-lg:   0 20px 60px rgba(0, 0, 0, 0.12);
  --r1: #FF6B6B;
  --r2: #FF8E53;
  --r3: #FFC300;
  --r4: #4ECDC4;
  --r5: #45B7D1;
  --r6: #9B59B6;
  --rainbow:   linear-gradient(135deg, #FF6B6B, #FF8E53, #FFC300, #4ECDC4, #45B7D1, #9B59B6);
  --rainbow-h: linear-gradient(90deg,  #FF6B6B, #FF8E53, #FFC300, #4ECDC4, #9B59B6);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  cursor: none;
}

h1, h2, h3, h4, h5 { font-family: 'Outfit', sans-serif; }
a { text-decoration: none; color: inherit; }
img { max-width: 100%; }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg3); }
::-webkit-scrollbar-thumb { background: var(--r6); border-radius: 3px; }

.section-label {
  display: inline-block;
  font-family: 'Outfit', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--r6);
  background: rgba(155, 89, 182, 0.08);
  border: 1px solid rgba(155, 89, 182, 0.2);
  border-radius: 100px;
  padding: 4px 14px;
  margin-bottom: 1rem;
}

.section-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--text);
}
.section-title span {
  background: var(--rainbow-h);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-desc {
  color: var(--text-light);
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 640px;
  margin-top: 0.75rem;
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }
`);

// ── Cursor.css ─────────────────────────────────────────────────────────────
writeFileSync(join(comp, 'Cursor.css'), `
.cursor-dot {
  position: fixed;
  top: 0; left: 0;
  width: 8px; height: 8px;
  background: var(--r1);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: none;
}

.cursor-ring {
  position: fixed;
  top: 0; left: 0;
  width: 40px; height: 40px;
  border: 2px solid rgba(155, 89, 182, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
}
.cursor-ring.hovered { width: 60px; height: 60px; border-color: var(--r6); }
`);

// ── Marquee.css ────────────────────────────────────────────────────────────
writeFileSync(join(comp, 'Marquee.css'), `
.marquee-strip {
  background: var(--rainbow);
  overflow: hidden;
  padding: 0.75rem 0;
  position: relative;
}
.marquee-track {
  display: flex;
  white-space: nowrap;
  animation: marquee-scroll 30s linear infinite;
}
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-item {
  font-family: 'Outfit', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fff;
  padding: 0 2.5rem;
  flex-shrink: 0;
}
.marquee-dot { color: rgba(255,255,255,0.5); margin-right: 0.5rem; }
.marquee-strip:hover .marquee-track { animation-play-state: paused; }
`);

// ── Navbar.css ─────────────────────────────────────────────────────────────
writeFileSync(join(comp, 'Navbar.css'), `
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 5%;
  transition: background 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease;
}
.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  padding: 0.9rem 5%;
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}
.nav-logo img { height: 44px; width: auto; display: block; }

.nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; }
.nav-links a {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text);
  transition: color 0.2s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0;
  width: 0; height: 2px;
  background: var(--rainbow-h);
  transition: width 0.3s ease;
}
.nav-links a:hover { color: var(--r6); }
.nav-links a:hover::after { width: 100%; }

.nav-cta {
  background: var(--rainbow) !important;
  color: #fff !important;
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  font-weight: 700 !important;
  font-size: 0.85rem !important;
  box-shadow: 0 4px 15px rgba(155,89,182,0.25);
  transition: transform 0.2s, box-shadow 0.2s !important;
}
.nav-cta::after { display: none !important; }
.nav-cta:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 20px rgba(155,89,182,0.35) !important;
  color: #fff !important;
}

.hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: none; padding: 4px; }
.hamburger span { display: block; width: 24px; height: 2px; background: var(--text); border-radius: 2px; transition: transform 0.3s, opacity 0.3s; }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .hamburger { display: flex; }
  .nav-links {
    position: fixed; inset: 0;
    background: rgba(255,255,255,0.98);
    flex-direction: column; justify-content: center; align-items: center; gap: 2.5rem;
    transform: translateX(100%); transition: transform 0.4s ease;
  }
  .nav-links.open { transform: translateX(0); }
  .nav-links a { font-size: 1.3rem; }
}
`);

// ── Hero.css ───────────────────────────────────────────────────────────────
writeFileSync(join(comp, 'Hero.css'), `
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #fff8f0 0%, #f8f4ff 50%, #f0f8ff 100%);
  padding: 100px 5% 60px;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute; top: -120px; right: -80px;
  width: 450px; height: 450px;
  background: radial-gradient(circle, rgba(155,89,182,0.07) 0%, transparent 70%);
  pointer-events: none;
}
.hero::after {
  content: '';
  position: absolute; bottom: -80px; left: 10%;
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(69,183,209,0.07) 0%, transparent 70%);
  pointer-events: none;
}

.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
}

.hero-image { display: flex; justify-content: center; align-items: center; }
.hero-img-wrap { position: relative; display: inline-flex; align-items: center; justify-content: center; }
.img-blob {
  position: absolute; inset: -50px;
  background: radial-gradient(ellipse, rgba(155,89,182,0.12) 0%, rgba(69,183,209,0.08) 50%, transparent 70%);
  border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%;
  z-index: 0;
}
.hero-img-wrap img {
  width: 100%; max-width: 440px; height: auto;
  position: relative; z-index: 1;
  filter: drop-shadow(0 20px 50px rgba(155,89,182,0.18)) drop-shadow(0 4px 15px rgba(0,0,0,0.06));
}

.hero-content { max-width: 560px; }

.hero-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.4rem, 4.5vw, 3.8rem);
  font-weight: 900;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
}
.hero-title span {
  background: var(--rainbow-h);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 1.05rem;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }

.btn-primary {
  background: var(--rainbow);
  color: #fff;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.85rem 2rem;
  border-radius: 100px;
  cursor: none;
  box-shadow: 0 4px 20px rgba(155,89,182,0.25);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 35px rgba(155,89,182,0.35); }

.btn-outline {
  border: 2px solid rgba(26,26,46,0.15);
  color: var(--text);
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.85rem 2rem;
  border-radius: 100px;
  cursor: none;
  transition: border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
}
.btn-outline:hover { border-color: var(--r6); background: rgba(155,89,182,0.05); color: var(--r6); }

.hero-stats { display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; }
.stat-item { text-align: center; }
.stat-item span { font-family: 'Outfit', sans-serif; font-size: 2rem; font-weight: 900; display: block; }
.stat-item:nth-child(1) span { color: var(--r1); }
.stat-item:nth-child(3) span { color: var(--r4); }
.stat-item:nth-child(5) span { color: var(--r6); }
.stat-item p { font-size: 0.82rem; color: var(--text-muted); letter-spacing: 0.05em; margin-top: 2px; }
.hero-stats .divider { width: 1px; height: 44px; background: rgba(0,0,0,0.1); }

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; text-align: center; }
  .hero-image { order: 1; }
  .hero-content { order: 2; }
  .hero-img-wrap img { max-width: 260px; }
  .hero-actions { justify-content: center; }
  .hero-stats { justify-content: center; }
  .hero-stats .divider { display: none; }
}
`);

// ── About.css ──────────────────────────────────────────────────────────────
writeFileSync(join(comp, 'About.css'), `
.section-pad { padding: 100px 0; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 5%; }

.about { background: #faf8ff; position: relative; overflow: hidden; }
.about::before {
  content: '';
  position: absolute; top: -150px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,107,107,0.05) 0%, transparent 70%);
  pointer-events: none;
}
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
.about-stats { display: flex; flex-direction: column; gap: 1.5rem; }
.about-stat-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.75rem 2rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.about-stat-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.stat-value { font-family: 'Outfit', sans-serif; font-size: 3rem; font-weight: 900; display: block; line-height: 1; }
.about-stat-card:nth-child(1) .stat-value { color: var(--r1); }
.about-stat-card:nth-child(2) .stat-value { color: var(--r3); }
.about-stat-card:nth-child(3) .stat-value { color: var(--r6); }
.stat-label { color: var(--text-muted); font-size: 0.9rem; margin-top: 0.4rem; letter-spacing: 0.04em; }

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .section-pad { padding: 70px 0; }
}
`);

// ── MissionVision.css ──────────────────────────────────────────────────────
writeFileSync(join(comp, 'MissionVision.css'), `
.mv { background: var(--bg); }
.mv-header { margin-bottom: 3.5rem; }
.mv-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.mv-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2rem 1.75rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.mv-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
.mv-card:nth-child(1) { border-top: 3px solid var(--r1); }
.mv-card:nth-child(2) { border-top: 3px solid var(--r4); }
.mv-card:nth-child(3) { border-top: 3px solid var(--r6); }
.mv-icon { font-size: 2.2rem; margin-bottom: 1rem; display: block; }
.mv-card h3 { font-family: 'Outfit', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text); margin-bottom: 0.75rem; }
.mv-card p { color: var(--text-light); font-size: 0.95rem; line-height: 1.75; }
.mv-card strong { color: var(--text); }
@media (max-width: 900px) { .mv-cards { grid-template-columns: 1fr; } }
`);

// ── Programs.css ───────────────────────────────────────────────────────────
writeFileSync(join(comp, 'Programs.css'), `
.programs { background: #fff8f0; }
.programs-header { margin-bottom: 3.5rem; }
.programs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.program-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-left: 4px solid;
  border-radius: 16px;
  padding: 1.75rem 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.program-card:nth-child(1) { border-left-color: var(--r1); }
.program-card:nth-child(2) { border-left-color: var(--r2); }
.program-card:nth-child(3) { border-left-color: var(--r3); }
.program-card:nth-child(4) { border-left-color: var(--r4); }
.program-card:nth-child(5) { border-left-color: var(--r5); }
.program-card:nth-child(6) { border-left-color: var(--r6); }
.program-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
.program-card.highlight { background: linear-gradient(135deg, rgba(255,107,107,0.03), rgba(155,89,182,0.03)); }
.program-icon { font-size: 2rem; display: block; margin-bottom: 0.75rem; }
.program-card h3 { font-family: 'Outfit', sans-serif; font-size: 1.05rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
.program-card p { color: var(--text-light); font-size: 0.9rem; line-height: 1.7; }
@media (max-width: 700px) { .programs-grid { grid-template-columns: 1fr; } }
`);

// ── HowItWorks.css ─────────────────────────────────────────────────────────
writeFileSync(join(comp, 'HowItWorks.css'), `
.how { background: #f0fbff; }
.how-header { margin-bottom: 4rem; }
.how-steps { display: flex; flex-direction: column; gap: 0; max-width: 760px; }
.how-step { display: flex; align-items: flex-start; gap: 1.75rem; position: relative; }
.step-num {
  flex-shrink: 0; width: 56px; height: 56px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 900; color: #fff;
  position: relative; z-index: 1;
}
.how-step:nth-child(1) .step-num { background: var(--r1); box-shadow: 0 4px 15px rgba(255,107,107,0.3); }
.how-step:nth-child(2) .step-num { background: var(--r3); box-shadow: 0 4px 15px rgba(255,195,0,0.3); }
.how-step:nth-child(3) .step-num { background: var(--r5); box-shadow: 0 4px 15px rgba(69,183,209,0.3); }
.how-step:nth-child(4) .step-num { background: var(--r6); box-shadow: 0 4px 15px rgba(155,89,182,0.3); }
.step-body {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem 1.75rem;
  flex: 1; margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s ease;
}
.how-step:hover .step-body { box-shadow: var(--shadow-md); }
.step-body h3 { font-family: 'Outfit', sans-serif; font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
.step-body p { color: var(--text-light); font-size: 0.93rem; line-height: 1.7; }
.step-connector {
  position: absolute; left: 27px; top: 56px;
  width: 2px; height: calc(100% - 14px);
  background: linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, transparent 100%);
}
@media (max-width: 600px) {
  .how-steps { max-width: 100%; }
  .step-num { width: 44px; height: 44px; font-size: 0.85rem; }
  .step-connector { left: 21px; }
}
`);

// ── Impact.css ─────────────────────────────────────────────────────────────
writeFileSync(join(comp, 'Impact.css'), `
.impact { background: var(--bg); }
.impact-header { margin-bottom: 2.5rem; }
.impact-filters { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2.5rem; }
.filter-btn {
  background: var(--bg3); border: 1px solid var(--border);
  color: var(--text-muted);
  font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 500;
  padding: 0.45rem 1rem; border-radius: 100px; cursor: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.filter-btn:hover { color: var(--text); border-color: rgba(0,0,0,0.15); }
.filter-btn.active { background: var(--rainbow); color: #fff; border-color: transparent; font-weight: 700; }
.impact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
.story-card {
  background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem;
  box-shadow: var(--shadow-sm); transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.story-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
.story-cat { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; display: block; margin-bottom: 0.6rem; }
.story-card:nth-child(1) .story-cat { color: var(--r5); }
.story-card:nth-child(2) .story-cat { color: var(--r1); }
.story-card:nth-child(3) .story-cat { color: var(--r6); }
.story-card:nth-child(4) .story-cat { color: var(--r3); }
.story-card:nth-child(5) .story-cat { color: var(--r2); }
.story-card:nth-child(6) .story-cat { color: var(--r4); }
.story-card h3 { font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
.story-card p { color: var(--text-light); font-size: 0.88rem; line-height: 1.65; }
@media (max-width: 900px) { .impact-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .impact-grid { grid-template-columns: 1fr; } }
`);

// ── Team.css ───────────────────────────────────────────────────────────────
writeFileSync(join(comp, 'Team.css'), `
.team { background: #f4fff8; }
.team-header { margin-bottom: 3.5rem; }
.team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
.team-card {
  background: var(--card-bg); border: 1px solid var(--border); border-radius: 20px;
  padding: 2rem 1.5rem; text-align: center;
  box-shadow: var(--shadow-sm); transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.team-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-md); }
.team-avatar {
  font-size: 3rem; width: 76px; height: 76px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1rem; border: 2px solid;
}
.team-card:nth-child(1) .team-avatar { background: rgba(255,107,107,0.1); border-color: var(--r1); }
.team-card:nth-child(2) .team-avatar { background: rgba(255,195,0,0.1);   border-color: var(--r3); }
.team-card:nth-child(3) .team-avatar { background: rgba(78,205,196,0.1);   border-color: var(--r4); }
.team-card:nth-child(4) .team-avatar { background: rgba(155,89,182,0.1);   border-color: var(--r6); }
.team-card h3 { font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 0.35rem; }
.team-card p { color: var(--text-muted); font-size: 0.83rem; line-height: 1.5; }
@media (max-width: 900px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 500px) { .team-grid { grid-template-columns: 1fr; } }
`);

// ── Testimonials.css ───────────────────────────────────────────────────────
writeFileSync(join(comp, 'Testimonials.css'), `
.testimonials { background: var(--bg2); text-align: center; }
.testi-header { margin-bottom: 3rem; }
.testi-card {
  background: var(--card-bg); border: 1px solid var(--border);
  border-left: 4px solid var(--r6);
  border-radius: 20px; padding: 2.5rem 2.5rem 2rem;
  max-width: 760px; margin: 0 auto; text-align: left;
  box-shadow: var(--shadow-sm);
  animation: fadeSlide 0.5s ease;
}
@keyframes fadeSlide {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}
.testi-stars {
  font-size: 1.25rem; letter-spacing: 2px; margin-bottom: 1.25rem;
  background: var(--rainbow-h);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.testi-card blockquote { font-size: 1.05rem; line-height: 1.8; color: var(--text-light); font-style: italic; margin-bottom: 1.5rem; }
.testi-author strong { display: block; font-family: 'Outfit', sans-serif; font-weight: 700; color: var(--text); font-size: 1rem; }
.testi-author span { color: var(--text-muted); font-size: 0.82rem; }
.testi-dots { display: flex; justify-content: center; gap: 0.6rem; margin-top: 1.75rem; }
.testi-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--border); border: 1px solid rgba(0,0,0,0.1);
  cursor: none; transition: background 0.3s, transform 0.3s;
}
.testi-dot.active { background: var(--r6); transform: scale(1.3); }
`);

// ── Contact.css ────────────────────────────────────────────────────────────
writeFileSync(join(comp, 'Contact.css'), `
.contact { background: #faf8ff; }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
.contact-details { margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1.25rem; }
.contact-item { display: flex; flex-direction: column; gap: 2px; }
.ci-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; color: var(--text-muted); text-transform: uppercase; }
.ci-value { font-size: 1rem; font-weight: 600; }
.contact-item:nth-child(1) .ci-value { color: var(--r6); }
.contact-item:nth-child(2) .ci-value { color: var(--r4); }
.contact-item:nth-child(3) .ci-value { color: var(--text); }
.contact-item:nth-child(4) .ci-value { color: var(--r2); }
.contact-form-wrap { background: var(--card-bg); border: 1px solid var(--border); border-radius: 24px; padding: 2.5rem; box-shadow: var(--shadow-md); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-field { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1.25rem; }
.form-field label { font-size: 0.82rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; }
.form-field input,
.form-field select,
.form-field textarea {
  background: var(--bg3); border: 1px solid var(--border); border-radius: 10px;
  color: var(--text); font-family: 'DM Sans', sans-serif; font-size: 0.95rem;
  padding: 0.75rem 1rem; outline: none;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  width: 100%; resize: vertical;
}
.form-field select option { background: var(--bg); }
.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus { border-color: var(--r6); box-shadow: 0 0 0 3px rgba(155,89,182,0.1); }
.form-field.error input,
.form-field.error select,
.form-field.error textarea { border-color: var(--r1); }
.err { font-size: 0.78rem; color: var(--r1); }
.submit-btn {
  width: 100%; background: var(--rainbow); color: #fff;
  font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 1rem;
  padding: 0.9rem; border-radius: 12px; border: none; cursor: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease; margin-top: 0.25rem;
}
.submit-btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.success-msg { text-align: center; padding: 2rem 1rem; }
.success-msg span { font-size: 3rem; display: block; margin-bottom: 1rem; }
.success-msg h3 {
  font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 700;
  background: var(--rainbow-h); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  margin-bottom: 0.75rem;
}
.success-msg p { color: var(--text-light); margin-bottom: 1.75rem; line-height: 1.7; }
.success-msg button {
  background: transparent; border: 1px solid var(--r6); color: var(--r6);
  font-family: 'Outfit', sans-serif; font-weight: 600; padding: 0.6rem 1.5rem;
  border-radius: 100px; cursor: none; transition: background 0.2s;
}
.success-msg button:hover { background: rgba(155,89,182,0.08); }
@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; } .form-row { grid-template-columns: 1fr; } }
`);

// ── Footer.css ─────────────────────────────────────────────────────────────
writeFileSync(join(comp, 'Footer.css'), `
.footer { background: #1a1a2e; padding: 4rem 0 2rem; }
.footer-top { display: grid; grid-template-columns: 2fr 1fr 1.5fr; gap: 3rem; margin-bottom: 3rem; }
.footer-logo { height: 40px; width: auto; margin-bottom: 1rem; filter: brightness(10); }
.footer-brand p { color: rgba(255,255,255,0.4); font-size: 0.88rem; line-height: 1.7; max-width: 280px; }
.footer-nav { display: flex; flex-direction: column; gap: 0.75rem; }
.footer-nav a { color: rgba(255,255,255,0.45); font-size: 0.9rem; transition: color 0.2s; }
.footer-nav a:hover { color: var(--r3); }
.footer-contact { display: flex; flex-direction: column; gap: 0.5rem; }
.footer-contact h4 { font-family: 'Outfit', sans-serif; font-size: 0.85rem; font-weight: 700; color: rgba(255,255,255,0.8); margin-bottom: 0.25rem; letter-spacing: 0.06em; }
.footer-contact a { font-size: 0.88rem; transition: opacity 0.2s; }
.footer-contact a:nth-child(2) { color: var(--r4); }
.footer-contact a:nth-child(3) { color: var(--r6); }
.footer-contact span { color: rgba(255,255,255,0.35); font-size: 0.88rem; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.5rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; }
.footer-bottom p { color: rgba(255,255,255,0.25); font-size: 0.8rem; }
@media (max-width: 768px) {
  .footer-top { grid-template-columns: 1fr; gap: 2rem; }
  .footer-bottom { flex-direction: column; align-items: center; text-align: center; }
}
`);

console.log('All CSS files written successfully!');

// ── HowItWorks.jsx ─────────────────────────────────────────────────────────
writeFileSync(join(comp, 'HowItWorks.jsx'), `import { useEffect, useRef, useState } from 'react';
import './HowItWorks.css';

const steps = [
  {
    num: '01',
    title: 'Book a Free Session',
    desc: 'Fill out a short form on the website or call directly. A counselling session is scheduled within 48 hours — at zero cost.',
    color: 'var(--r1)',
    shadow: 'rgba(255,107,107,0.35)',
  },
  {
    num: '02',
    title: 'Assessment',
    desc: 'The student takes a psychometric and aptitude test to discover their strengths, personality type, and learning style.',
    color: 'var(--r3)',
    shadow: 'rgba(255,195,0,0.35)',
  },
  {
    num: '03',
    title: 'Personalised Roadmap',
    desc: 'A counsellor builds a fully customised career plan — including the right courses, colleges, and milestones specific to the student.',
    color: 'var(--r5)',
    shadow: 'rgba(69,183,209,0.35)',
  },
  {
    num: '04',
    title: 'Ongoing Mentorship',
    desc: 'FutureDots stays with the student — with follow-up sessions, scholarship alerts, and support right through to college admission.',
    color: 'var(--r6)',
    shadow: 'rgba(155,89,182,0.35)',
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
`);

// ── HowItWorks.css ─────────────────────────────────────────────────────────
writeFileSync(join(comp, 'HowItWorks.css'), `
/* Tall outer section provides the scroll space */
.how-outer {
  height: 420vh;
  position: relative;
}

/* Sticky panel — stays fixed while user scrolls through outer */
.how-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f4ff 0%, #f0fbff 100%);
  display: flex;
  align-items: center;
}

/* Two-column layout inside the sticky panel */
.how-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 5rem;
  align-items: center;
}

/* Left: header */
.how-header { }

.how-progress-bar {
  margin-top: 2rem;
  height: 4px;
  background: rgba(0,0,0,0.08);
  border-radius: 2px;
  overflow: hidden;
  max-width: 200px;
}
.how-progress-fill {
  height: 100%;
  background: var(--rainbow);
  border-radius: 2px;
  transition: width 0.15s ease;
}

/* Right: steps + vertical line */
.how-steps-wrap {
  position: relative;
}

/* Vertical track line */
.how-track {
  position: absolute;
  left: 27px;          /* center of 56px circle */
  top: 28px;           /* center of first circle */
  bottom: 28px;        /* center of last circle */
  width: 3px;
  background: rgba(0,0,0,0.07);
  border-radius: 2px;
  overflow: hidden;
  z-index: 0;
}
.how-track-fill {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  background: linear-gradient(to bottom, var(--r1), var(--r3), var(--r5), var(--r6));
  transition: height 0.2s ease;
  border-radius: 2px;
}

/* Individual step row */
.how-step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding-bottom: 1.75rem;
  opacity: 0;
  transform: translateX(-24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.how-step:last-child { padding-bottom: 0; }
.how-step.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Coloured number circle */
.step-circle {
  flex-shrink: 0;
  width: 56px; height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  font-weight: 900;
  color: #fff;
  position: relative;
  z-index: 2;
}

/* Step card */
.step-card {
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 16px;
  padding: 1.1rem 1.4rem;
  flex: 1;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
.step-card h3 {
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.35rem;
}
.step-card p {
  color: var(--text-light);
  font-size: 0.88rem;
  line-height: 1.65;
}

/* Mobile: disable sticky, show all steps */
@media (max-width: 768px) {
  .how-outer { height: auto; }
  .how-sticky { position: relative; height: auto; padding: 70px 0; }
  .how-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .how-step { opacity: 1; transform: none; }
  .how-progress-bar { display: none; }
}
`);

console.log('HowItWorks files written!');

