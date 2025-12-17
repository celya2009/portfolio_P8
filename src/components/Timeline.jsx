import React, { useState } from "react";
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
        "Avant cette formation, j’ai travaillé plusieurs années comme infirmière dans le secteur hospitalier. Ce métier m’a permis de développer la rigueur, l’organisation, la patience et la capacité à gérer des situations complexes. Ces compétences me servent aujourd’hui dans le développement web pour concevoir des interfaces pensées pour l’utilisateur et pour résoudre des problèmes de manière structurée. Ma reconversion est née d’une motivation personnelle forte : créer des outils adaptés pour ma fille dyslexique et, plus largement, pour aider les enfants en difficulté scolaire. Cette motivation m’a donné envie de m’orienter vers le développement web afin de transformer cette idée en projets concrets et accessibles.",
    },
  ];

  const [openModal, setOpenModal] = useState(null);

  return (
    <section id="timeline" className="py-10 md:py-16 px-4 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-10 text-center">
          Parcours
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-6 md:pl-8 border-l-2 border-primary"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

              <div className="bg-card border border-border rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <div className="text-xs sm:text-sm text-primary font-semibold mb-2">
                  {exp.year}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {exp.title}
                </h3>
                {exp.company && (
                  <div className="text-secondary font-medium mb-4">{exp.company}</div>
                )}
                <button
                  onClick={() => setOpenModal(exp.id)}
                  className="self-start px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
                >
                  Voir plus
                </button>

                {/* Modal */}
                {openModal === exp.id && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    onClick={() => setOpenModal(null)}
                  >
                    <div
                      className="bg-card-light rounded-lg max-w-3xl w-full p-8 sm:p-10 relative max-h-[90vh] overflow-y-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Croix de fermeture */}
                      <button
                        onClick={() => setOpenModal(null)}
                        className="absolute top-4 right-4 text-xl font-bold text-muted-foreground  hover:text-gray-900"
                      >
                        ×
                      </button>

                      {/* Contenu du bloc*/}
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 pl-2">
                        {exp.title}
                      </h3>
                      {exp.company && (
                        <div className="text-secondary font-medium mb-3 pl-2">{exp.company}</div>
                      )}
                      <p className="text-muted-foreground whitespace-pre-line mb-4 pl-2">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bouton pour le CV */}
        <div className="text-center mt-6">
          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
          >
            Voir mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
