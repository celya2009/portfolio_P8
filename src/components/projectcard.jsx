import React, { useState } from "react";
import './projects.css';

const ProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      {/* Carte du projet */}
      <div className="project-card" onClick={openModal}>
        <img src={project.image} alt={project.title} className="project-card-image" />
        <div className="project-overlay">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-badges">
            {project.technologies.map(tech => (
              <span key={tech} className="badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Modale */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {/* Bouton fermer */}
            <button onClick={closeModal} className="modal-close">✖</button>

            {/* Titre centré */}
            <h2 className="modal-title">{project.title}</h2>

            {/* Contenu du projet */}
            <div className="modal-body">
              <p><strong>Description :</strong> {project.description}</p>
              <p><strong>Contexte :</strong> {project.contexte}</p>
              <p><strong>Objectifs :</strong> {project.objectifs}</p>
              <p><strong>Stack :</strong> {project.stack}</p>
              <p><strong>Compétences :</strong> {project.competences}</p>
              <p><strong>Résultats :</strong> {project.resultats}</p>

              {/* Badges technologies */}
              <div className="tech-badges">
                {project.technologies.map(tech => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
