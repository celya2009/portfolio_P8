import React, { useState, useEffect } from "react";
import Button from "@/components/button/button"; 
import Card from "@/components/card/card"; 
import "./projects.css";

// Images des projets
import bookiImg from "../../assets/projet-booki.webp";
import kasaImg from "../../assets/projet-kasa.webp";
import grimoireImg from "../../assets/projet-mon-vieux-grimoire.webp";
import sophieBluelImg from "../../assets/projet-sophie-bluel.webp";
import ninaImg from "../../assets/projet-nina-carducci.webp";

const projectsData = [
  {
    title: "BOOKI",
    description: "Intégration HTML/CSS à partir d'une maquette Figma, site responsive pour réservation d'hébergements.",
    technologies: ["HTML5", "CSS3", "Figma"],
    category: "Frontend",
    image: bookiImg,
    contexte: "Projet d'intégration web basé sur une maquette Figma, visant à créer un site de réservation d’hébergements. Réalisé dans le cadre de la formation Développeur Web OpenClassrooms.",
    objectifs: "Intégrer le contenu conformément à la maquette et rendre le site responsive sur tous les supports.",
    stack: "HTML5, CSS3, Figma",
    competences: "Intégration HTML/CSS, responsive design, utilisation de Git pour le versioning",
    resultats: "Site Booki fonctionnel et responsive, conforme à la maquette.",
    perspectives: "Améliorer la navigation mobile et ajouter des animations pour enrichir l’expérience utilisateur.",
    github: "https://github.com/celya2009/p2-booki.git"
  },
  {
    title: "KASA",
    description: "Interface React avec navigation multi-pages via React Router et composants réutilisables.",
    technologies: ["React", "React Router", "CSS3"],
    category: "React",
    image: kasaImg,
    contexte: "Projet React visant à créer une interface utilisateur pour un site d'hébergements, avec navigation entre pages. Réalisé dans le cadre de la formation Développeur Web OpenClassrooms.",
    objectifs: "Développer des composants réutilisables et configurer la navigation multi-pages avec React Router.",
    stack: "React, React Router, CSS3, Sass",
    competences: "Création de composants React, navigation React Router, stylisation avec CSS/Sass, débogage avec DevTools",
    resultats: "Interface Kasa fonctionnelle avec navigation fluide entre les pages.",
    perspectives: "Ajouter des filtres de recherche avancés et optimiser les performances pour mobile.",
    github: "https://github.com/celya2009/p5-kasa.git"
  },
  {
    title: "MON VIEUX GRIMOIRE",
    description: "Back-End Node.js/Express/MongoDB avec CRUD et authentification, site de notation de livres.",
    technologies: ["Node.js", "Express", "MongoDB"],
    category: "Backend",
    image: grimoireImg,
    contexte: "Projet back-end visant à créer un site de notation de livres avec stockage sécurisé des données. Réalisé dans le cadre de la formation Développeur Web OpenClassrooms.",
    objectifs: "Implémenter un serveur Node.js avec CRUD sécurisé et authentification utilisateur.",
    stack: "Node.js, Express, MongoDB",
    competences: "Back-end, API REST, manipulation de la base de données, sécurité et authentification",
    resultats: "Serveur fonctionnel avec opérations CRUD et authentification, base de données sécurisée.",
    perspectives: "Mettre en place des notifications pour les utilisateurs et améliorer la documentation API.",
    github: "https://github.com/celya2009/p6-mon-vieux-grimoire.git"
  },
  {
    title: "SOPHIE BLUEL",
    description: "Front-End HTML/CSS/JS avec gestion de formulaires et événements utilisateurs, portfolio d’architecte d’intérieur.",
    technologies: ["HTML", "CSS", "JavaScript", "Formulaires", "DOM"],
    category: "Frontend",
    image: sophieBluelImg,
    contexte: "Projet Front-End visant à créer un site dynamique avec formulaires interactifs, intégration HTML/CSS à partir d’une maquette Figma, et gestion des événements utilisateur en JavaScript. Réalisé dans le cadre de la formation Développeur Web OpenClassrooms.",
    objectifs: "Rendre le site dynamique, gérer les événements utilisateurs et les formulaires, manipuler le DOM.",
    stack: "HTML, CSS, JavaScript",
    competences: "Front-end, gestion des événements utilisateurs, formulaires interactifs, manipulation du DOM",
    resultats: "Site dynamique avec formulaire fonctionnel, interaction avec l’utilisateur et contenu mis à jour via JS.",
    perspectives: "Améliorer le design et ajouter des fonctionnalités avancées comme un mode admin pour gérer les contenus.",
    github: "https://github.com/celya2009/p3-sophie-bluel.git"
  },
  {
    title: "NINA CARDUCCI",
    description: "Audit SEO et optimisation des performances et de l’accessibilité d’un site de photographe.",
    technologies: ["SEO", "Lighthouse", "Accessibilité", "Performance"],
    category: "Frontend",
    image: ninaImg,
    contexte: "Projet visant à réaliser un audit SEO et d’accessibilité d’un site web, avec analyse des performances et recommandations d’amélioration. Réalisé dans le cadre de la formation Développeur Web OpenClassrooms.",
    objectifs: "Améliorer SEO, accessibilité et performances du site, rédiger un cahier de tests.",
    stack: "HTML, CSS, JavaScript",
    competences: "Optimisation, accessibilité numérique, audit performance, tests et QA",
    resultats: "Scores Lighthouse significativement améliorés, contenu plus accessible et performant.",
    perspectives: "Mettre en place un suivi automatisé des performances et SEO, améliorer le design UX/UI.",
    github: "https://github.com/celya2009/https-github.com-OpenClassrooms-Student-Center-Nina-Carducci-Dev.git"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", "Frontend", "React", "Backend"];

  const filteredProjects =
    filter === "Tous"
      ? projectsData
      : projectsData.filter(p => p.category === filter);

  // Composant interne ProjectCard
  const ProjectCard = ({ project }) => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
      document.body.style.overflow = modalOpen ? "hidden" : "auto";
      return () => { document.body.style.overflow = "auto"; };
    }, [modalOpen]);

    return (
      <div className="project-card-wrapper">
        <div className="project-card" onClick={() => setModalOpen(true)}>
          <img src={project.image} alt={project.title} className="project-card-image"/>
          <div className="project-overlay">
             <h3 className="project-title">{project.title}</h3>
             <p className="project-description">{project.description}</p>
          </div>
        </div>
        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>
              <div className="modal-body">
                <div className="modal-section"><h3>Description</h3><p>{project.description}</p></div>
                <div className="modal-section"><h3>Contexte</h3><p>{project.contexte}</p></div>
                <div className="modal-section"><h3>Objectifs</h3><p>{project.objectifs}</p></div>
                <div className="modal-section"><h3>Stack</h3><p>{project.stack}</p></div>
                <div className="modal-section"><h3>Compétences</h3><p>{project.competences}</p></div>
                <div className="modal-section"><h3>Résultats</h3><p>{project.resultats}</p></div>
                <div className="modal-section"><h3>Perspectives</h3><p>{project.perspectives}</p></div>
                <div className="modal-section"><h3>GitHub</h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">Voir le repository GitHub</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="projects-section" aria-label="projets">
      <div className="projects-container">
        <h2 className="projects-title">Projets</h2>

       <div className="projects-filters">
  {categories.map(category => (
    <Button
      key={category}
      type={filter === category ? "primary" : "outline"} // primary si actif, sinon outline
      onClick={() => setFilter(category)}
    >
      {category}
    </Button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
