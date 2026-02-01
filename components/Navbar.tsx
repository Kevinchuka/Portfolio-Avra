
import React from 'react';
import logoWordmark from '../assets/images/logos/Logo y Texto.png';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const navLinks = [
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Digitalización', href: '#digitalizacion' },
    { name: 'Casos', href: '#casos' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Nosotros', href: '#nosotros' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'py-3 glass-nav' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-sm transform rotate-45 group-hover:rotate-180 transition-transform duration-700 shadow-[0_0_15px_rgba(249,115,22,0.4)]"></div>
          <img
            src={logoWordmark}
            alt="AVRA IT"
            className="h-5 md:h-6 w-auto select-none"
            loading="eager"
          />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold text-zinc-500 hover:text-orange-500 transition-colors tracking-[0.2em] uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto"
            className="relative px-6 py-2.5 rounded-full overflow-hidden group transition-all"
          >
            <div className="absolute inset-0 bg-orange-500/10 border border-orange-500/20 rounded-full group-hover:bg-orange-500/20 transition-colors"></div>
            <span className="relative z-10 text-[10px] font-black text-orange-500 uppercase tracking-widest">
              Contacto
            </span>
          </a>
        </div>

        <div className="md:hidden">
           <button className="text-white opacity-50">
             <i className="bi bi-list text-2xl"></i>
           </button>
        </div>
      </div>
    </nav>
  );
};
