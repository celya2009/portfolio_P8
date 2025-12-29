import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" aria-label="À propos de Malika Salhi" className="about-section">
      <div className="about-container">
        {/* Titre principal */}
        <h2 className="about-title">
          À propos
        </h2>

        {/* Texte introductif */}
        <p className="about-intro">
          Après une reconversion professionnelle, j'ai suivi la formation{" "}
          <strong className="text-primary">OpenClassrooms</strong> pour devenir
          développeuse web. Cette expérience m'a permis de combiner ma créativité
          et ma logique technique pour concevoir des sites performants et accessibles.
        </p>

        {/* Carte Compétences & Méthodologie */}
        <div className="about-card">
          <h3>
            Compétences & Méthodologie
          </h3>
          <ul>
            <li>
              <strong>Compétences techniques :</strong> Front-End (HTML5, CSS3,
              JavaScript, React, React Router), Back-End (Node.js, Express, MongoDB)
            </li>
            <li>
              <strong>Méthodologie :</strong> Agile, design-driven, priorité à
              l’accessibilité et aux performances
            </li>
            <li>
              <strong>Approche :</strong> Interface claire et intuitive, rigueur
              technique et lisibilité du code
            </li>
          </ul>
        </div>

        {/* Texte conclusion */}
        <p className="about-conclusion text-primary">
          Mon objectif est d'intégrer une équipe innovante où je pourrai continuer
          à développer mes compétences en Front-End et Back-End, et contribuer
          à des projets web performants et accessibles.
        </p>
      </div>
    </section>
  );
};

export default About;

