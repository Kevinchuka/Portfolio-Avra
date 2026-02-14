
import React from 'react';

export const LocalDigitalization: React.FC = () => {
  const features = [
    "Relevamiento inicial y objetivos claros",
    "Fotografía y contenidos de productos/servicios",
    "Digitalización de catálogos y documentos físicos",
    "Carga organizada en bases de datos seguras",
    "Publicación y puesta en marcha del sitio"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1">
          <div className="inline-block px-3 py-1 rounded-md bg-orange-500 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Acompañamiento real
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Del local a lo digital, <span className="text-orange-500 underline decoration-white/20 underline-offset-8">con orden y claridad.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-xl">
            Conocemos su operación, organizamos la información y la llevamos a un sitio web sólido y fácil de actualizar.
          </p>
          
          <ul className="space-y-4">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-zinc-300 font-medium">
                <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-500 text-[10px]">
                  <i className="bi bi-check-lg"></i>
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 sm:mt-12">
            <a href="#contacto" className="inline-flex items-center gap-2 text-white font-bold group">
              Solicitar una reunión 
              <span className="group-hover:translate-x-2 transition-transform text-orange-500">
                <i className="bi bi-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden glass-card p-2 relative z-10">
            <img 
              src="https://picsum.photos/seed/tech1/800/800" 
              alt="Proceso de digitalización para negocios locales" 
              className="w-full h-full object-cover rounded-2xl opacity-80"
              loading="lazy"
              decoding="async"
            />
            {/* Overlay indicators */}
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 glass-card p-3 sm:p-4 rounded-xl border-orange-500/20 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-orange-500 mb-2"></div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Organizando datos</p>
            </div>
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 glass-card p-3 sm:p-4 rounded-xl border-white/20">
               <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500">Proceso confiable</p>
            </div>
          </div>
          {/* Background glow */}
          <div className="absolute -inset-4 bg-orange-500/10 blur-[80px] rounded-full z-0"></div>
        </div>
      </div>
    </div>
  );
};
