import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setModalOpen(true)}
        className="
          relative cursor-pointer rounded-xl overflow-hidden 
          shadow-lg bg-neutral-900 
          hover:scale-[1.02] transition-transform
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
        />

        {/* Overlay */}
        <div className="
          absolute bottom-0 left-0 right-0 
          bg-black/60 hover:bg-black/70 transition 
          p-4 text-white
        ">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="text-sm opacity-90">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-orange-600 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="
            fixed inset-0 bg-black/70 flex items-center justify-center z-50
          "
          onClick={() => setModalOpen(false)}
        >
          <div
            className="
              bg-neutral-900 text-white rounded-xl p-6 md:p-10 
              max-w-xl w-[90%] overflow-y-auto max-h-[90vh]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

            <div className="space-y-4 text-left">
              <div>
                <h3 className="text-orange-500 font-semibold uppercase text-sm">
                  Description
                </h3>
                <p className="text-sm opacity-90">{project.description}</p>
              </div>

              <div>
                <h3 className="text-orange-500 font-semibold uppercase text-sm">
                  Contexte
                </h3>
                <p className="text-sm opacity-90">{project.contexte}</p>
              </div>

              <div>
                <h3 className="text-orange-500 font-semibold uppercase text-sm">
                  Objectifs
                </h3>
                <p className="text-sm opacity-90">{project.objectifs}</p>
              </div>

              <div>
                <h3 className="text-orange-500 font-semibold uppercase text-sm">
                  Stack
                </h3>
                <p className="text-sm opacity-90">{project.stack}</p>
              </div>

              <div>
                <h3 className="text-orange-500 font-semibold uppercase text-sm">
                  Compétences
                </h3>
                <p className="text-sm opacity-90">{project.competences}</p>
              </div>

              <div>
                <h3 className="text-orange-500 font-semibold uppercase text-sm">
                  Résultats
                </h3>
                <p className="text-sm opacity-90">{project.resultats}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
