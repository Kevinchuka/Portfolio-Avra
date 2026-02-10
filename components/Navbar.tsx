import React, { useState } from "react";
import logoWordmark from "../assets/images/logos/Logo y Texto.png";

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Soluciones", href: "#soluciones" },
    { name: "Digitalización", href: "#digitalizacion" },
    { name: "Casos", href: "#casos" },
    { name: "Proceso", href: "#proceso" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "py-3 glass-nav" : "py-5 md:py-7 transparent-nav"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-sm transform rotate-45 group-hover:rotate-180 transition-transform duration-700 shadow-[0_0_15px_rgba(249,115,22,0.4)]"></div>
          <img
            src={logoWordmark}
            alt="AVRA IT"
            className="h-5 md:h-6 w-auto select-none"
            loading="eager"
            decoding="async"
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
          <button
            type="button"
            className="text-white opacity-70 hover:opacity-100 transition"
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"} text-2xl`}></i>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 sm:mx-6 mt-4 rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl p-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-xs font-bold text-zinc-300 hover:text-orange-500 transition-colors tracking-[0.25em] uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="block text-center text-xs font-black text-orange-500 uppercase tracking-[0.25em] border border-orange-500/30 rounded-full py-3"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};
