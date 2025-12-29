import React, { useState, useEffect } from "react";
import "./skills.css";

// Logos
import htmlLogo from "@/assets/logos/html5.webp";
import cssLogo from "@/assets/logos/css.webp";
import jsLogo from "@/assets/logos/javascript.webp";
import reactLogo from "@/assets/logos/react.webp";
import nodeLogo from "@/assets/logos/nodejs.webp";
import mongoLogo from "@/assets/logos/mongodb.webp";
import sassLogo from "@/assets/logos/sass.webp";
import githubLogo from "@/assets/logos/github.webp";
import figmaLogo from "@/assets/logos/figma.webp";
import tailwindLogo from "@/assets/logos/tailwindcss.webp";

const technicalSkills = [
  { name: "HTML5", logo: htmlLogo, description: "Intégration de contenu conforme à une maquette, structuration sémantique.", level: "Confirmé" },
  { name: "CSS3", logo: cssLogo, description: "Mise en forme et responsive design avec CSS.", level: "Confirmé" },
  { name: "JavaScript", logo: jsLogo, description: "Gestion des événements, DOM et interactivité.", level: "Intermédiaire" },
  { name: "React", logo: reactLogo, description: "Création de composants et gestion d'état avec React.", level: "Intermédiaire" },
  { name: "Node.js", logo: nodeLogo, description: "Création de serveur et manipulation des données côté back-end.", level: "Débutant" },
  { name: "MongoDB", logo: mongoLogo, description: "Stockage structuré de données et opérations CRUD.", level: "Intermédiaire" },
  { name: "Sass", logo: sassLogo, description: "Styles avancés avec variables et mixins.", level: "Débutant" },
  { name: "GitHub", logo: githubLogo, description: "Gestion de versions et collaboration via Git.", level: "Intermédiaire" },
  { name: "Figma", logo: figmaLogo, description: "Intégration d'une maquette design et adaptation front-end.", level: "Intermédiaire" },
  { name: "Tailwind CSS", logo: tailwindLogo, description: "Stylisation rapide avec classes utilitaires.", level: "Débutant" },
];

const Skills = () => {
  const [modalOpen, setModalOpen] = useState(null);
  const [progress, setProgress] = useState(0);

  const openModal = (skillName) => {
    setModalOpen(skillName);
    setProgress(0);
  };

  const closeModal = () => setModalOpen(null);

  const getLevelWidth = (level) => {
    switch (level) {
      case "Débutant":
        return 30;
      case "Intermédiaire":
        return 60;
      case "Confirmé":
        return 100;
      default:
        return 0;
    }
  };

  useEffect(() => {
    if (!modalOpen) return;

    let width = 0;
    const skill = technicalSkills.find((s) => s.name === modalOpen);
    const target = getLevelWidth(skill.level);

    const interval = setInterval(() => {
      width += 2;
      setProgress(width);
      if (width >= target) clearInterval(interval);
    }, 10);

    return () => clearInterval(interval);
  }, [modalOpen]);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
      <h2 className="skills-title">
        Compétences
      </h2>

      <p className="skills-intro">
        Cliquez sur un logo pour voir mon niveau de maîtrise.
      </p>

      <div className="skills-card">
        <div className="skills-grid">
          {technicalSkills.map((skill) => (
            <div
              key={skill.name}
              className="skill-item"
              onClick={() => openModal(skill.name)}
            >
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <span className="skill-name">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      </div>
      <p className="skills-info-bottom">
        Ces compétences sont mises en œuvre dans les{" "}
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="skills-link"
        >
          projets réalisés
        </button>
        .
      </p>

      {technicalSkills.map(
        (skill) =>
          modalOpen === skill.name && (
            <div
              key={skill.name}
              className="skills-modal-overlay"
              onClick={closeModal}
            >
              <div
                className="skills-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="skills-modal-close"
                  onClick={closeModal}
                >
                  ×
                </button>

                <h3 className="skills-modal-title">{skill.name}</h3>
                <p className="skills-modal-desc">{skill.description}</p>

                <div className="skills-modal-level">
                  <span className="skills-modal-level-label">Niveau</span>

                  <div className="skills-progress-bg">
                    <div
                      className="skills-progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <span className="skills-modal-level-text">{skill.level}</span>
                </div>
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default Skills;
