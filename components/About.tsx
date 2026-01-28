
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: cardsRef.current?.querySelectorAll('.team-card'),
            opacity: [0, 1],
            translateY: [40, 0],
            scale: [0.95, 1],
            delay: anime.stagger(200),
            easing: 'easeOutExpo',
            duration: 1200
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const team = [
    { 
      name: 'Santino', 
      role: 'Frontend Architect', 
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      description: 'Especialista en interfaces de alto rendimiento y experiencias de usuario cinematográficas.'
    },
    { 
      name: 'Mateo', 
      role: 'Backend Engineer', 
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
      description: 'Arquitecto de sistemas escalables y lógica de negocio compleja bajo estándares de seguridad extrema.'
    },
    { 
      name: 'Kevin', 
      role: 'Marketing & Frontend', 
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
      description: 'Estratega digital enfocado en el crecimiento de marca y desarrollo de interfaces persuasivas.'
    }
  ];

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <h2 className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">El Núcleo de Avra</h2>
        <p className="font-outfit text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Sinergia Técnica de <span className="text-zinc-500">Alto Rendimiento.</span>
        </p>
        <p className="text-zinc-400 text-lg leading-relaxed">
          No somos una agencia masiva. Somos un estudio boutique donde cada línea de código y cada píxel es supervisado por los fundadores.
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="team-card opacity-0 group relative">
            <div className="absolute -inset-1 bg-gradient-to-b from-orange-500/20 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative glass-card rounded-[2rem] overflow-hidden border-white/5 group-hover:border-orange-500/30 transition-all duration-500 h-full flex flex-col">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
                
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1.5 rounded-full glass-nav text-[9px] font-black uppercase tracking-widest text-orange-400 border border-orange-500/20">
                    {member.role.split(' ')[0]}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-end bg-gradient-to-b from-transparent to-black/80">
                <h3 className="font-outfit text-3xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-orange-500/80 text-xs font-bold uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <div className="h-px w-12 bg-orange-500 mb-4 group-hover:w-full transition-all duration-700"></div>
                <p className="text-zinc-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {member.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 glass-card rounded-[2.5rem] border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h4 className="font-outfit text-2xl font-bold mb-4 italic">"La perfección no es una meta, es nuestro estándar operativo."</h4>
          <p className="text-zinc-500 text-sm">Nuestro equipo combina ingeniería de software robusta con una sensibilidad estética de clase mundial.</p>
        </div>
        <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-zinc-400 hover:text-orange-500 transition-all cursor-pointer">
              <i className="bi bi-briefcase"></i>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-zinc-400 hover:text-orange-500 transition-all cursor-pointer">
              <i className="bi bi-tools"></i>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-zinc-400 hover:text-orange-500 transition-all cursor-pointer">
              <i className="bi bi-palette"></i>
            </div>
        </div>
      </div>
    </div>
  );
};
