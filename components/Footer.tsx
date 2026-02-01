
import React from 'react';
import logoWordmark from '../assets/images/logos/Logo y Texto.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-orange-500 rounded-sm transform rotate-45"></div>
              <img
                src={logoWordmark}
                alt="AVRA IT"
                className="h-5 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-zinc-500 max-w-sm text-sm">
              Potenciando negocios físicos a través de ingeniería digital premium y estrategias de digitalización de vanguardia.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-widest uppercase">Explorar</h4>
              <ul className="text-zinc-500 text-sm space-y-2">
                <li><a href="#soluciones" className="hover:text-orange-500 transition-colors">Soluciones</a></li>
                <li><a href="#digitalizacion" className="hover:text-orange-500 transition-colors">Digitalización</a></li>
                <li><a href="#casos" className="hover:text-orange-500 transition-colors">Casos</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-widest uppercase">Legal</h4>
              <ul className="text-zinc-500 text-sm space-y-2">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Términos</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">
          <p>© 2024 AVRA IT - Todos los derechos reservados.</p>
          <p>Hecho con precisión por el equipo Avra.</p>
        </div>
      </div>
    </footer>
  );
};
