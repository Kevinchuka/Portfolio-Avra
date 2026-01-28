
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
      description: 'Presencia corporativa de alto impacto con diseño minimalista y performance optimizada.',
      icon: <i className="bi bi-bank"></i>
    },
    {
      title: 'Landing Pages',
      description: 'Arquitectura persuasiva diseñada para maximizar conversiones y retorno de inversión.',
      icon: <i className="bi bi-rocket-takeoff"></i>
    },
    {
      title: 'E-commerce Pro',
      description: 'Tiendas online escalables con experiencias de compra fluidas y gestión de inventario inteligente.',
      icon: <i className="bi bi-bag-check"></i>
    },
    {
      title: 'SaaS & Sistemas',
      description: 'Desarrollamos herramientas a medida para optimizar procesos internos y software como servicio.',
      icon: <i className="bi bi-cpu"></i>
    }
  ];

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Nuestras Soluciones</h2>
        <p className="font-outfit text-4xl md:text-5xl font-bold">Tecnología sin límites para su visión.</p>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="opacity-0 glass-card p-8 rounded-3xl group hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="text-3xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-orange-500/20 text-orange-400 transition-colors">
              {service.icon}
            </div>
            <h3 className="font-outfit text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
