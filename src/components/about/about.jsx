import React from "react";
import Card from "@/components/card/card";
import "./about.css";

const About = () => {
  return (
    <section id="about" aria-label="À propos de Malika Salhi" className="about-section">
      <div className="about-container">
        {/* Titre principal */}
        <h2>À propos</h2>

        {/* Texte introductif */}
        <p>
          Après une reconversion professionnelle, j'ai suivi la formation{" "}
          <strong>OpenClassrooms</strong> pour devenir
          développeuse web. Cette expérience m'a permis de combiner ma créativité
          et ma logique technique pour concevoir des sites performants et accessibles.
        </p>

        {/* Card globale */}
       <Card className="about-card">
          <h3>Compétences</h3>
          <p>
            Front-End : HTML5, CSS3, JavaScript, React, React Router,
            Back-End : Node.js, Express, MongoDB
          </p>

          <h3>Méthodologie</h3>
          <p>
            Agile, design-driven, priorité à l’accessibilité et aux performances.
            Interface claire et intuitive, rigueur technique et lisibilité du code.
          </p>
        </Card>

        {/* Texte conclusion */}
        <p>
          Mon objectif est d'intégrer une équipe innovante où je pourrai continuer
          à développer mes compétences en Front-End et Back-End, et contribuer
          à des projets web performants et accessibles.
        </p>
      </div>
    </section>
  );
};

export default About;
