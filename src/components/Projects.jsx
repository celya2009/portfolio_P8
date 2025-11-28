import React, { useState } from 'react';
import './projects.css';
import ProjectCard from './projectcard';

// Images des projets
import bookiImg from '../assets/projet-booki.png';
import kasaImg from '../assets/projet-kasa.png';
import grimoireImg from '../assets/projet-mon-vieux-grimoire.png';

const projects = [
  {
    title: "Booki",
    description: "Intégration HTML/CSS à partir d'une maquette Figma, site responsive pour réservation d'hébergements.",
    technologies: ["HTML5", "CSS3", "Figma"],
    category: "Frontend",
    image: bookiImg
  },
  {
    title: "Kasa",
    description: "Interface React avec navigation multi-pages via React Router et composants réutilisables.",
    technologies: ["React", "React Router", "CSS3"],
    category: "React",
    image: kasaImg
  },
  {
    title: "Mon Vieux Grimoire",
    description: "Back-End Node.js/Express/MongoDB avec CRUD et authentification, site de notation de livres.",
    technologies: ["Node.js", "Express", "MongoDB"],
    category: "Backend",
    image: grimoireImg
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
              className={`filter-btn ${filter === category ? "active" : ""}`}
              onClick={() => setFilter(category)}
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
