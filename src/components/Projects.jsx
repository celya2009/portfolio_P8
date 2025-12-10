import React, { useState } from "react";
import ProjectCard from "./projectcard";
import "./projects.css";

// Images des projets
import bookiImg from "../assets/projet-booki.webp";
import kasaImg from "../assets/projet-kasa.webp";
import grimoireImg from "../assets/projet-mon-vieux-grimoire.webp";

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
    resultats: "Site Booki fonctionnel et responsive, conforme à la maquette.",
    perspectives: "Améliorer la navigation mobile et ajouter des animations pour enrichir l’expérience utilisateur."
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
    resultats: "Interface Kasa fonctionnelle avec navigation fluide entre les pages.",
    perspectives: "Ajouter des filtres de recherche avancés et optimiser les performances pour mobile."
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
    resultats: "Serveur fonctionnel avec opérations CRUD et authentification, base de données sécurisée.",
    perspectives: "Mettre en place des notifications pour les utilisateurs et améliorer la documentation API."
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", "Frontend", "React", "Backend"];
  const filteredProjects = filter === "Tous" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
          Projets
        </h2>

        {/* Filtres */}
        <div className="flex flex-wrap gap-3 justify-center mb-8 md:mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 border-2
                ${filter === category
                  ? "bg-primary text-white border-primary"
                  : "bg-background text-foreground border-primary hover:bg-primary hover:text-white"}`
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="projects-grid transition-all duration-300">
          {filteredProjects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
