import React, { useState } from "react";
import "./projectcard.css";

const ProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      {/* Carte du projet */}
      <div className="project-card" onClick={openModal}>
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
        />
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
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button onClick={closeModal} className="modal-close">
              x
            </button>

            {/* Titre centré */}
            <h2 className="modal-title">{project.title}</h2>

            {/* Contenu */}
            <div className="modal-body">

              <div className="modal-section">
                <h3>Description</h3>
                <p>{project.description}</p>
              </div>

              <div className="modal-section">
                <h3>Contexte</h3>
                <p>{project.contexte}</p>
              </div>

              <div className="modal-section">
                <h3>Objectifs</h3>
                <p>{project.objectifs}</p>
              </div>

              <div className="modal-section">
                <h3>Stack</h3>
                <p>{project.stack}</p>
              </div>

              <div className="modal-section">
                <h3>Compétences</h3>
                <p>{project.competences}</p>
              </div>

              <div className="modal-section">
                <h3>Résultats</h3>
                <p>{project.resultats}</p>
              </div>

              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
