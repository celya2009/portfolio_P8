import React, { useState } from "react";
import "./timeline.css";
import cvPdf from "../assets/mon-cv.pdf";

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      year: "Avril 2025 - Décembre 2025",
      title: "Formation Développement Web – Front-End",
      company: "OpenClassrooms",
      description:
        "Je me forme actuellement au développement web avec une spécialisation orientée Front-End, ce qui me permet de créer des interfaces interactives, accessibles et performantes. J’apprends à concevoir des sites clairs, lisibles et adaptés à tous, en utilisant HTML, CSS, JavaScript et React. Mon objectif est de développer des solutions utiles, notamment pour des enfants en difficulté ou en inclusion scolaire, afin de leur faciliter l’apprentissage et l’accès aux ressources numériques.",
    },
    {
      id: 2,
      year: "Avant 2025",
      title: "Infirmière – Secteur hospitalier",
      company: "",
      description:
        "Avant cette formation, j’ai travaillé plusieurs années comme infirmière dans le secteur hospitalier. Ce métier m’a permis de développer la rigueur, l’organisation, la patience et la capacité à gérer des situations complexes. Ces compétences me servent aujourd’hui dans le développement web pour concevoir des interfaces pensées pour l’utilisateur et pour résoudre des problèmes de manière structurée. Ma reconversion est née d’une motivation personnelle forte : créer des outils adaptés pour ma fille dyslexique et, plus largement, pour aider les enfants en difficulté scolaire. Cette motivation m’a donné envie de s’orienter vers le développement web afin de transformer cette idée en projets concrets et accessibles.",
    },
  ];

  const [openModal, setOpenModal] = useState(null);

  return (
    <section id="timeline" className="timeline-container">
      <h2 className="text-foreground font-bold text-center">Parcours</h2>

      {experiences.map((exp) => (
        <div key={exp.id} className="timeline-item">
          {/* Ligne verticale */}
          <div className="timeline-line"></div>

          {/* Cercle sur la ligne */}
          <div className="timeline-circle"></div>

          {/* Card */}
          <div className="timeline-card bg-card">
            <div className="text-primary font-semibold">{exp.year}</div>
            <h3 className="text-card-foreground font-bold">{exp.title}</h3>
            {exp.company && <div className="text-secondary">{exp.company}</div>}
            <button
              className="bg-primary text-card-foreground hover:bg-primary-dark"
              onClick={() => setOpenModal(exp.id)}
            >
              Voir plus
            </button>

            {/* Modale */}
            {openModal === exp.id && (
              <div
                className="modal-overlay"
                onClick={() => setOpenModal(null)}
              >
                <div
                  className="modal-content bg-card-light"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setOpenModal(null)}
                    className="modal-close text-muted hover:text-foreground"
                  >
                    ×
                  </button>

                  <h3 className="text-card-foreground font-bold">{exp.title}</h3>
                  {exp.company && (
                    <div className="text-secondary font-medium">{exp.company}</div>
                  )}
                  <p className="text-muted">{exp.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="timeline-cv">
        <a
          href={cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-card-foreground hover:bg-primary-dark"
        >
          Voir mon CV
        </a>
      </div>
    </section>
  );
};

export default Timeline;
