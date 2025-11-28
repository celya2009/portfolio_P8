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

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-badges">
              {project.technologies.map(tech => (
                <span key={tech} className="badge">{tech}</span>
              ))}
            </div>
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
