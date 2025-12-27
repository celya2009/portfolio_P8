import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" aria-label="À propos de Malika Salhi" className="about-section">
      <div className="about-container">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          À propos
        </h2>

        <p className="about-intro text-sm sm:text-base md:text-lg text-card-foreground">
          Après une reconversion professionnelle, j'ai suivi la formation{" "}
          <strong className="text-primary">OpenClassrooms</strong> pour devenir
          développeuse web. Cette expérience m'a permis de combiner ma créativité
          et ma logique technique pour concevoir des sites performants et accessibles.
        </p>

        <div className="about-card bg-card rounded-2xl sm:rounded-3xl">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
         Compétences & Méthodologie
        </h3>
        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-card-foreground space-y-1 sm:space-y-2">
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

        <p className="about-conclusion text-sm sm:text-base md:text-lg text-primary font-semibold leading-relaxed">
          Mon objectif est d'intégrer une équipe innovante où je pourrai continuer
          à développer mes compétences en Front-End et Back-End, et contribuer
          à des projets web performants et accessibles.
        </p>
      </div>
    </section>
  );
};

export default About;
