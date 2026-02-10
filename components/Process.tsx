
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate the path drawing - smoother and shallower
          anime({
            targets: pathRef.current,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 2000,
            delay: 200
          });

          // Nodes entrance with moderated vertical movement
          anime({
            targets: '.node-item',
            opacity: [0, 1],
            scale: [0.8, 1],
            translateY: (el: HTMLElement) => {
              const isTop = el.classList.contains('node-top');
              return isTop ? [40, 0] : [-40, 0];
            },
            delay: anime.stagger(250, { start: 500 }),
            easing: 'easeOutQuart',
            duration: 1000
          });

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 'I',
      title: 'Incepción',
      icon: 'bi-fingerprint',
      side: 'top',
      desc: 'Relevamiento inicial, objetivos y alcance del proyecto.'
    },
    {
      id: 'II',
      title: 'Arquitectura',
      icon: 'bi-box-seam',
      side: 'bottom',
      desc: 'Planificación del sitio, estructura y contenido principal.'
    },
    {
      id: 'III',
      title: 'Forja',
      icon: 'bi-terminal-fill',
      side: 'top',
      desc: 'Desarrollo, integración y revisiones con el cliente.'
    },
    {
      id: 'IV',
      title: 'Evolución',
      icon: 'bi-infinity',
      side: 'bottom',
      desc: 'Lanzamiento, ajustes y soporte según necesidad.'
    }
  ];

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative py-16 sm:py-20 overflow-visible">
      
      {/* Subtle Background Typography - Reduced Scale */}
      <div className="absolute inset-0 flex items-center justify-between opacity-[0.02] pointer-events-none select-none z-0 px-4">
        <h2 className="font-outfit text-5xl sm:text-7xl md:text-[10rem] font-black tracking-tighter">PHASE</h2>
        <h2 className="font-outfit text-5xl sm:text-7xl md:text-[10rem] font-black tracking-tighter">FLOW</h2>
      </div>

      {/* Header Info - More compact */}
      <div className="relative z-20 mb-12 sm:mb-16 md:mb-20 text-center">
        <span className="text-orange-500 font-black text-[9px] uppercase tracking-[0.6em] mb-2 block">Nuestro proceso</span>
        <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Un flujo claro <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">de trabajo</span>
        </h2>
      </div>

      {/* Horizontal Flow Container - Reduced min-height */}
      <div className="relative min-h-[320px] sm:min-h-[350px] flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        
        {/* SVG Connector Line - Shallower Curves */}
        <div className="absolute inset-0 z-0 hidden lg:block py-10">
          <svg width="100%" height="100%" viewBox="0 0 1000 200" fill="none" preserveAspectRatio="none">
            <path 
              ref={pathRef}
              d="M0 100 C 125 100, 125 40, 250 40 C 375 40, 375 160, 500 160 C 625 160, 625 40, 750 40 C 875 40, 875 100, 1000 100" 
              stroke="url(#process-line-grad)" 
              strokeWidth="1"
              strokeDasharray="8 4"
              className="opacity-30"
            />
            <defs>
              <linearGradient id="process-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Nodes */}
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className={`node-item opacity-0 relative z-10 w-full lg:w-1/4 flex flex-col items-center lg:mb-0 mb-10 sm:mb-12 ${
              step.side === 'top' ? 'lg:-translate-y-12 node-top' : 'lg:translate-y-12 node-bottom'
            }`}
          >
            {/* The Node Hub - More compact size (w-20 vs w-24) */}
            <div className="relative group mb-6">
              {/* Subtle Aura */}
              <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-xl scale-90 group-hover:scale-125 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
              
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glass-card border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-orange-500/30 transition-all duration-500">
                {/* Step Numeral */}
                <span className="absolute -bottom-2 -right-1 text-white/5 font-outfit font-black text-4xl group-hover:text-orange-500/10 transition-colors">
                  {step.id}
                </span>
                
                <i className={`bi ${step.icon} text-xl sm:text-2xl text-zinc-500 group-hover:text-orange-500 transition-all duration-500 group-hover:scale-110 z-10`}></i>
                
                {/* Glow Core */}
                <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Central Connection Indicator (Desktop Only) */}
              <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-orange-500/30 ${
                step.side === 'top' ? 'top-[140%]' : 'bottom-[140%]'
              }`}>
                <div className="w-full h-full bg-orange-500 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full shadow-[0_0_10px_#f97316]"></div>
              </div>
            </div>

            {/* Content Text - Refined Proportions */}
            <div className="text-center px-4">
              <h3 className="font-outfit text-base sm:text-lg font-bold mb-2 text-white/90 group-hover:text-orange-500 transition-colors">
                {step.title}
              </h3>
              <p className="text-zinc-500 text-[11px] sm:text-[12px] leading-relaxed max-w-[180px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
                {step.desc}
              </p>
            </div>

            {/* Mobile Vertical Indicator */}
            {idx < steps.length - 1 && (
              <div className="lg:hidden w-px h-10 bg-gradient-to-b from-orange-500/30 to-transparent mt-8"></div>
            )}
          </div>
        ))}
      </div>

      {/* Subtle Visual Finish */}
      <div className="mt-16 flex justify-center opacity-20">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>
    </div>
  );
};
