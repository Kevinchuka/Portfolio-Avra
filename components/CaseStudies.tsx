import React, { useEffect, useState } from 'react';

import { projects } from '../data/projects';

export const CaseStudies: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; alt: string } | null>(null);
  const activeProject = activeProjectIndex !== null ? projects[activeProjectIndex] : null;

  useEffect(() => {
    if (!activeProject && !fullscreenImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (fullscreenImage) {
          setFullscreenImage(null);
          return;
        }

        setActiveProjectIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject, fullscreenImage]);

  const openFullscreenImage = (src: string, alt: string) => {
    setFullscreenImage({ src, alt });
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 md:mb-16 gap-6">
        <div>
          <h2 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">Trabajos recientes</h2>
          <p className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold">Ejemplos de proyectos realizados.</p>
        </div>
        <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          Ver todos los proyectos <i className="bi bi-arrow-right"></i>
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </span>
              </div>
            </div>
            <h3 className="font-outfit text-xl sm:text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{project.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
            <button className="mt-4 text-xs font-bold uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2">
              Ver detalles <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        ))}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 sm:px-6 py-8 sm:py-10"
          onClick={() => setActiveProjectIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
        >
          <div
            className="relative max-w-5xl w-full max-h-[85vh] sm:max-h-[75vh] bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 overflow-y-auto max-h-[85vh] sm:max-h-[75vh]">
              <div className="lg:w-1/2">
                <button
                  type="button"
                  className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-900 group"
                  onClick={() => openFullscreenImage(activeProject.image, activeProject.title)}
                >
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute bottom-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white px-2 py-1 rounded-full border border-white/20">
                    Pantalla completa
                  </span>
                </button>
                {activeProject.gallery && (
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {activeProject.gallery.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-orange-400/70 transition-colors"
                        onClick={() => openFullscreenImage(image, `${activeProject.title} ${index + 1}`)}
                      >
                        <img
                          src={image}
                          alt={`${activeProject.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">{activeProject.category}</span>
                  <h3 id="project-dialog-title" className="font-outfit text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
                    {activeProject.title}
                  </h3>
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

      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setFullscreenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Vista de imagen en pantalla completa"
        >
          <img
            src={fullscreenImage.src}
            alt={fullscreenImage.alt}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
            decoding="async"
          />
          <button
            type="button"
            className="absolute top-6 right-6 text-zinc-300 hover:text-white text-2xl"
            onClick={() => setFullscreenImage(null)}
            aria-label="Cerrar imagen completa"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      )}
    </div>
  );
};
