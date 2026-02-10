
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass-card rounded-[3rem] overflow-hidden border-white/5">
        <div className="bg-black/20 p-8 sm:p-12 md:p-24 flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-1">
            <h2 className="font-outfit text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">Hablemos de tu proyecto</h2>
            <p className="text-zinc-500 text-base sm:text-lg mb-8 sm:mb-12 max-w-md leading-relaxed">
              Podemos coordinar por mensaje, llamada o email. Compartí tu idea y te respondemos con tiempos y próximos pasos.
            </p>
            
            <div className="space-y-8">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">WhatsApp</p>
                  <p className="text-base sm:text-lg text-zinc-300">Escribir por WhatsApp</p>
                </div>
              </a>
              <a href="mailto:proyectos@avrait.com" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Email</p>
                  <p className="text-base sm:text-lg text-zinc-300">proyectos@avrait.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex-1 glass-card p-6 sm:p-8 md:p-12 rounded-[2.5rem] border-white/5 bg-white/[0.01]">
            <form className="space-y-8" aria-label="Formulario de contacto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">
                    Empresa
                  </label>
                  <input 
                    id="company"
                    name="company"
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-orange-500 outline-none transition-all placeholder:text-zinc-800"
                    placeholder="Empresa o nombre"
                    autoComplete="organization"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">
                    Email
                  </label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-orange-500 outline-none transition-all placeholder:text-zinc-800"
                    placeholder="Email de contacto"
                    autoComplete="email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="project" className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">
                  Proyecto
                </label>
                <div className="relative">
                  <select
                    id="project"
                    name="project"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-zinc-400 focus:border-orange-500 outline-none transition-all appearance-none"
                  >
                    <option className="bg-zinc-950">Sitio institucional</option>
                    <option className="bg-zinc-950">Landing o campaña</option>
                    <option className="bg-zinc-950">Tienda online</option>
                    <option className="bg-zinc-950">Sistema interno</option>
                  </select>
                  <i className="bi bi-chevron-down absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-zinc-700 pointer-events-none"></i>
                </div>
              </div>

              <button type="submit" className="group relative w-full py-4 sm:py-5 rounded-2xl overflow-hidden transition-all active:scale-[0.98]">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 text-white font-black text-xs uppercase tracking-[0.3em]">Enviar consulta</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
