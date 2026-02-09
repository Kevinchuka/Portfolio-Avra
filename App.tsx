
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { LocalDigitalization } from './components/LocalDigitalization';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-orange-200">
      <Navbar isScrolled={isScrolled} />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="soluciones" className="relative z-10 py-24 md:py-32">
          <Solutions />
        </section>

        <section id="digitalizacion" className="relative z-10 py-24 md:py-32 bg-zinc-950">
          <LocalDigitalization />
        </section>

        <section id="casos" className="relative z-30 py-24 md:py-32">
          <CaseStudies />
        </section>

        <section id="proceso" className="relative z-0 py-24 md:py-32 bg-zinc-950">
          <Process />
        </section>

        <section id="nosotros" className="relative z-10 py-24 md:py-32">
          <About />
        </section>

        <section id="contacto" className="relative z-10 py-24 md:py-32 bg-gradient-to-b from-black to-zinc-900">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
