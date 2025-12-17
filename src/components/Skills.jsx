import React, { useState, useEffect } from "react";

// Logos des compétences techniques
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

// Icônes soft skills
import communication from "@/assets/icones/communication.webp";
import travailEquipe from "@/assets/icones/travaildequipe.webp";
import creativite from "@/assets/icones/creativite.webp";
import adaptabilite from "@/assets/icones/adaptabilité.webp";
import gestionProblemes from "@/assets/icones/gestiondeprobleme.webp";
import gestionProjet from "@/assets/icones/gestiondeprojet.webp";

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

const softSkills = [
  { name: "Travail d'équipe", icon: travailEquipe },
  { name: "Communication", icon: communication },
  { name: "Gestion de problèmes", icon: gestionProblemes },
  { name: "Gestion de projet", icon: gestionProjet },
  { name: "Adaptabilité", icon: adaptabilite },
  { name: "Créativité", icon: creativite },
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
      case "Débutant": return "30%";
      case "Intermédiaire": return "60%";
      case "Confirmé": return "100%";
      default: return "0%";
    }
  };

  useEffect(() => {
    if (modalOpen) {
      let width = 0;
      const skill = technicalSkills.find((s) => s.name === modalOpen);
      const target = parseInt(getLevelWidth(skill.level));
      const interval = setInterval(() => {
        if (width >= target) clearInterval(interval);
        else {
          width += 2;
          setProgress(width);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [modalOpen]);

  
  return (
    
    <section id="skills" className="py-12 md:py-20 px-4 bg-background min-h-screen">
         <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center uppercase">
      Compétences
    </h2>
      <div className="max-w-4xl mx-auto rounded-2xl p-4 md:p-4 shadow-md bg-card-light">
        {/* Compétences Techniques */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
          COMPÉTENCES TECHNIQUES
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center mb-12">
          {technicalSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-1 cursor-pointer"
              onClick={() => openModal(skill.name)}
            >
              <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
              <span className="text-sm md:text-base font-semibold text-white text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Compétences Humaines */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
          COMPÉTENCES HUMAINES
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
          {softSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-1">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-10 h-10"
              />
              <span className="text-sm md:text-base font-semibold text-white text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modales compétences techniques */}
      {technicalSkills.map(
        (skill) =>
          modalOpen === skill.name && (
            <div
              key={skill.name}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
              onClick={closeModal}
            >
              <div
                className="bg-card p-6 md:p-8 rounded-2xl w-full max-w-lg text-center relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-white text-lg font-bold"
                  onClick={closeModal}
                >
                  x
                </button>

                <h2 className="text-2xl font-bold mb-4">{skill.name}</h2>
                <p className="mb-4 text-sm md:text-base">{skill.description}</p>

                <div className="text-left">
                  <span className="text-white font-semibold">Niveau :</span>
                  <div className="bg-gray-700 h-3 rounded-full mt-1">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span className="text-white text-sm">{skill.level}</span>
                </div>
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default Skills;
