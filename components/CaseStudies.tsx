
import React from 'react';

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: 'Aurora Logistics',
      category: 'SaaS / Optimización',
      image: 'https://picsum.photos/seed/aurora/800/600',
      description: 'Reducción del 40% en tiempos de carga mediante digitalización completa de inventario.'
    },
    {
      title: 'Vanguard Realty',
      category: 'Real Estate / Web',
      image: 'https://picsum.photos/seed/vanguard/800/600',
      description: 'Plataforma interactiva con visualización 360 y gestión de prospectos automatizada.'
    },
    {
      title: 'Nexum Studio',
      category: 'Branding / E-commerce',
      image: 'https://picsum.photos/seed/nexum/800/600',
      description: 'Tienda premium para marca de diseño con experiencia de checkout en un solo paso.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Casos de Éxito</h2>
          <p className="font-outfit text-4xl md:text-5xl font-bold">Resultados que trascienden.</p>
        </div>
        <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          Ver todos los proyectos <i className="bi bi-arrow-right"></i>
        </a>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {cases.map((project, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3] bg-zinc-900">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </span>
              </div>
            </div>
            <h3 className="font-outfit text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{project.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
