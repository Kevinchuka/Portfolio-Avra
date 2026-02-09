
import React, { useEffect, useState } from 'react';

import { projects } from '../data/projects';

export const CaseStudies: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const activeProject = activeProjectIndex !== null ? projects[activeProjectIndex] : null;

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProjectIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Trabajos recientes</h2>
          <p className="font-outfit text-4xl md:text-5xl font-bold">Ejemplos de proyectos realizados.</p>
        </div>
        <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          Ver todos los proyectos <i className="bi bi-arrow-right"></i>
        </a>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group cursor-pointer"
            onClick={() => setActiveProjectIndex(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setActiveProjectIndex(idx);
              }
            }}
          >
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
            <button className="mt-4 text-xs font-bold uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2">
              Ver detalles <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        ))}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-6 py-10"
          onClick={() => setActiveProjectIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[75vh] bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col lg:flex-row gap-10 p-8 lg:p-10 overflow-y-auto max-h-[75vh]">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-900">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {activeProject.gallery && (
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {activeProject.gallery.map((image, index) => (
                      <div key={index} className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
                        <img src={image} alt={`${activeProject.title} ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">{activeProject.category}</span>
                  <h3 className="font-outfit text-3xl md:text-4xl font-bold mt-3">{activeProject.title}</h3>
                  <p className="text-zinc-300 mt-4">{activeProject.summary}</p>
                </div>
                {activeProject.highlights && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Highlights</h4>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      {activeProject.highlights.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeProject.techStack && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech, index) => (
                        <span key={index} className="text-xs font-semibold bg-white/5 border border-white/10 px-3 py-1 rounded-full text-zinc-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {activeProject.details && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Detalles del proyecto</h4>
                    <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
                      {activeProject.details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                      ))}
                    </div>
                  </div>
                )}
                {activeProject.demoUrl && (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 transition-colors text-black font-bold px-5 py-3 rounded-full text-sm uppercase tracking-widest"
                  >
                    Ver demo <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                )}
              </div>
            </div>
            <button
              onClick={() => setActiveProjectIndex(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors text-xl"
              aria-label="Cerrar"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
