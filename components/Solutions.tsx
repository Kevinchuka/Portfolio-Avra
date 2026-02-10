
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export const Solutions: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: gridRef.current?.children,
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(150),
            easing: 'easeOutExpo',
            duration: 1000
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Web Institucional',
      description: 'Sitios claros y profesionales para presentar servicios, equipo y propuesta de valor.',
      icon: <i className="bi bi-bank"></i>
    },
    {
      title: 'Landing Pages',
      description: 'Páginas específicas para campañas, lanzamientos o captación de consultas.',
      icon: <i className="bi bi-rocket-takeoff"></i>
    },
    {
      title: 'E-commerce Pro',
      description: 'Tiendas online con navegación simple, catálogo ordenado y procesos de compra confiables.',
      icon: <i className="bi bi-bag-check"></i>
    },
    {
      title: 'SaaS & Sistemas',
      description: 'Herramientas a medida para operaciones internas, paneles y automatizaciones.',
      icon: <i className="bi bi-cpu"></i>
    }
  ];

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">Servicios</h2>
        <p className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold">Soluciones digitales a medida, sin exagerar.</p>
      </div>

      <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="opacity-0 glass-card p-6 sm:p-8 rounded-3xl group hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="text-2xl sm:text-3xl mb-5 sm:mb-6 bg-white/5 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl group-hover:bg-orange-500/20 text-orange-400 transition-colors">
              {service.icon}
            </div>
            <h3 className="font-outfit text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
