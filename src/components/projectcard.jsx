import React, { useState, useEffect } from "react";

import "./projectcard.css";

const ProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

    // Bloquer le scroll du body quand la modale est ouverte
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <div>
      {/* Carte du projet */}
      <div className="project-card" onClick={openModal}>
      <img
       src={project.image}
       alt={project.title}
       className="project-card-image"
       loading="lazy"/>

        <div className="project-overlay">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-badges">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modale */}
    {modalOpen && (
  <div className="modal-overlay" onClick={closeModal}>
    <div
  className="bg-card-light rounded-lg max-w-2xl w-full p-6 sm:p-8 relative max-h-[80vh] overflow-y-auto"
  onClick={(e) => e.stopPropagation()}
>


      {/* Bouton fermer */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-xl font-bold text-white-700 hover:text-gray-900"
      >
        ×
      </button>

            {/* Titre centré */}
            <h2 className="modal-title">{project.title}</h2>

            {/* Contenu */}
            <div className="modal-body">

              <div className="modal-section">
                <h3>DESCRIPTION</h3>
                <p>{project.description}</p>
              </div>

              <div className="modal-section">
                <h3>CONTEXTE</h3>
                <p>{project.contexte}</p>
              </div>

              <div className="modal-section">
                <h3>OBJECTIFS</h3>
                <p>{project.objectifs}</p>
              </div>

              <div className="modal-section">
                <h3>STACK</h3>
                <p>{project.stack}</p>
              </div>

              <div className="modal-section">
                <h3>COMPETENCES</h3>
                <p>{project.competences}</p>
              </div>

              <div className="modal-section">
                <h3>RESULTATS</h3>
                <p>{project.resultats}</p>
              </div>

              <div className="modal-section">
                <h3>PERSPECTIVE D'AMELIORATION</h3>
                <p>{project.perspectives}</p>
              </div> 

                <div className="modal-section">
  <h3>GITHUB</h3>
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary underline hover:text-primary/80"
  >
    Voir le repository GitHub
  </a>
</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
