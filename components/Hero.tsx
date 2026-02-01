"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const timeline = anime.timeline({
      easing: 'easeOutQuart',
      duration: 1000,
    });

    timeline
      .add({
        targets: tagRef.current,
        opacity: [0, 1],
        translateY: [15, 0],
        delay: 200,
      })
      .add({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        filter: ['blur(15px)', 'blur(0px)'],
        offset: '-=700',
      })
      .add({
        targets: textRef.current,
        opacity: [0, 1],
        translateY: [15, 0],
        offset: '-=800',
      })
      .add({
        targets: buttonsRef.current?.children,
        opacity: [0, 1],
        translateY: [15, 0],
        delay: anime.stagger(100),
        offset: '-=800',
      });

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-20 mix-blend-screen scale-110 will-change-transform"
          style={{
            backgroundImage:
              'url(https://i.pinimg.com/originals/72/18/3d/72183dcae11b06acb43fbd4da4650b5f.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="absolute inset-0 filter blur-[100px] contrast-[150%] brightness-[1.1]">
          <div className="absolute top-[10%] left-[20%] w-[35vw] h-[35vw] bg-orange-900/10 rounded-full animate-pulse"></div>
          <div
            className="absolute w-[30vw] h-[30vw] bg-orange-600/40 rounded-full mix-blend-screen opacity-60 transition-transform duration-[600ms] ease-out"
            style={{
              transform:
                'translate3d(calc(var(--mouse-x) - 50%), calc(var(--mouse-y) - 50%), 0) scale(1.2)',
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center select-none">
        <div
          ref={tagRef}
          className="opacity-0 inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-orange-500/80 text-[9px] font-black uppercase tracking-[0.4em] backdrop-blur-md"
        >
          Digital Engineering Suite
        </div>

        <h1
          ref={titleRef}
          className="opacity-0 font-outfit text-6xl md:text-[9rem] font-extrabold tracking-tighter mb-8 leading-[0.85] text-white"
        >
          Avra{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-800">
            IT
          </span>
        </h1>

        <p
          ref={textRef}
          className="opacity-0 max-w-xl mx-auto text-base md:text-xl text-zinc-500 mb-12 font-light leading-relaxed tracking-wide"
        >
          Arquitectura digital de precisión para negocios que exigen trascender la frontera de lo físico.
        </p>

        <div ref={buttonsRef} className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#contacto"
            className="opacity-0 group relative px-10 py-4 overflow-hidden rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90"></div>
            <div className="absolute inset-[1px] bg-black rounded-full transition-colors group-hover:bg-transparent"></div>
            <span className="relative z-10 text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2">
              Agendar Visita <i className="bi bi-chevron-right text-[10px]"></i>
            </span>
          </a>

          <a
            href="#casos"
            className="opacity-0 px-10 py-4 border border-white/10 glass-card rounded-full font-bold text-sm tracking-widest uppercase text-zinc-400 hover:text-white hover:border-white/30 transition-all"
          >
            Ver Proyectos
          </a>
        </div>
      </div>
    </div>
  );
};
