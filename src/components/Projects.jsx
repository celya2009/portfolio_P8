import React, { useState } from 'react';
import './projects.css';
import ProjectCard from './projectcard';

// Images des projets
import bookiImg from '../assets/projet-booki.png';
import kasaImg from '../assets/projet-kasa.png';
import grimoireImg from '../assets/projet-mon-vieux-grimoire.png';

const projects = [
  {
    title: "BOOKI",
    description: "Intégration HTML/CSS à partir d'une maquette Figma, site responsive pour réservation d'hébergements.",
    technologies: ["HTML5", "CSS3", "Figma"],
    category: "Frontend",
    image: bookiImg,
    contexte: "Projet d'intégration web basé sur une maquette Figma, visant à créer un site de réservation d’hébergements.",
    objectifs: "Intégrer le contenu conformément à la maquette et rendre le site responsive sur tous les supports.",
    stack: "HTML5, CSS3, Figma",
    competences: "Intégration HTML/CSS, responsive design, utilisation de Git pour le versioning",
    resultats: "Site Booki fonctionnel et responsive, conforme à la maquette."
  },
  {
    title: "KASA",
    description: "Interface React avec navigation multi-pages via React Router et composants réutilisables.",
    technologies: ["React", "React Router", "CSS3"],
    category: "React",
    image: kasaImg,
    contexte: "Projet React visant à créer une interface utilisateur pour un site d'hébergements, avec navigation entre pages.",
    objectifs: "Développer des composants réutilisables et configurer la navigation multi-pages avec React Router.",
    stack: "React, React Router, CSS3, Sass",
    competences: "Création de composants React, navigation React Router, stylisation avec CSS/Sass, débogage avec DevTools",
    resultats: "Interface Kasa fonctionnelle avec navigation fluide entre les pages."
  },
  {
    title: "MON VIEUX GRIMOIRE",
    description: "Back-End Node.js/Express/MongoDB avec CRUD et authentification, site de notation de livres.",
    technologies: ["Node.js", "Express", "MongoDB"],
    category: "Backend",
    image: grimoireImg,
    contexte: "Projet back-end visant à créer un site de notation de livres avec stockage sécurisé des données.",
    objectifs: "Implémenter un serveur Node.js avec CRUD sécurisé et authentification utilisateur.",
    stack: "Node.js, Express, MongoDB",
    competences: "Back-end, API REST, manipulation de la base de données, sécurité et authentification",
    resultats: "Serveur fonctionnel avec opérations CRUD et authentification, base de données sécurisée."
  }
];

const Project = () => {
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", "Frontend", "React", "Backend"];
  const filteredProjects = filter === "Tous" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">Projets</h2>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 md:mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                px-5 py-2 rounded-full font-medium transition-colors duration-200 border-2
                bg-primary border-primary text-white
                hover:bg-[#b26500] hover:border-[#b26500]
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="projects-grid">
          {filteredProjects.map((projectItem) => (
            <ProjectCard key={projectItem.title} project={projectItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
