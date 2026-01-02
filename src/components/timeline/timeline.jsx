import React, { useState } from "react";
import "./timeline.css";
import Card from "@/components/card/card";
import cvPdf from "../../assets/mon-cv.pdf";

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      year: "Avril 2025 - Décembre 2025",
      title: "Formation Développement Web – Front-End",
      company: "OpenClassrooms",
      description:
        "Je me forme actuellement au développement web, plus précisément au Front-End. Cette formation inclut HTML, CSS, JavaScript, React et la réalisation de projets concrets comme des sites web et portfolios. Je développe mes compétences en intégration, responsive design, et bonnes pratiques du web."
    },
    {
      id: 2,
      year: "Mars 2000 - Mars 2025",
      title: "Infirmière – Secteur hospitalier",
      company: "",
      description:
        "Avant cette formation, j’ai travaillé comme infirmière dans différents services hospitaliers. J’y ai acquis des compétences en gestion de situations complexes, organisation, communication et travail en équipe. Ces expériences m'ont permis de développer rigueur et sens des priorités, qui me servent aujourd'hui dans mes projets web."
    }
  ];

  const [openModal, setOpenModal] = useState(null);

  return (
    <section id="timeline" className="timeline-section" aria-label="parcours">
      <div className="container">
        <h2 className="timeline-title">Parcours</h2>

        <div className="timeline-container">
          {experiences.map((exp) => (
           <Card key={exp.id} className="timeline-card">
          <p className="timeline-year">{exp.year}</p>        
          {exp.company && <h3 className="timeline-company">{exp.company}</h3>}

    <h3 className="timeline-title-card">{exp.title}</h3> {/* Titre de l'expérience */}
              <button
                className="timeline-btn"
                onClick={() => setOpenModal(exp.id)}
              >
                Voir plus
              </button>

              {openModal === exp.id && (
                <div className="modal-overlay" onClick={() => setOpenModal(null)}>
                  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setOpenModal(null)}
                      className="modal-close"
                    >
                      ×
                    </button>
                   <h3 className="modal-title">{exp.title}</h3>
                    {exp.company && <div>{exp.company}</div>}
                    <p>{exp.description}</p>
                  </div>
                </div>
              )}
               </Card>
          ))}
        </div>

        <div className="timeline-cv">
          <a href={cvPdf} target="_blank" rel="noopener noreferrer">
            Voir mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
