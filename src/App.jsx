import './index.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Programs from './components/Programs';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <MissionVision />
      <Programs />
      <HowItWorks />
      <Impact />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}


