import React from "react";

const About = () => {
  return (
    <section
      id="about"
      aria-label="À propos de Malika Salhi"
      className="scroll-mt-16 pt-[6rem] pb-[7rem] md:py-12"
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-4 md:gap-4">
        {/* Titre principal */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center">
          À propos
        </h2>

        {/* Introduction */}
        <p className="text-sm sm:text-base md:text-lg text-card-foreground text-center">
          Après une reconversion professionnelle, j'ai suivi la formation{" "}
          <strong className="text-primary">OpenClassrooms</strong> pour devenir
          développeuse web. Cette expérience m'a permis de combiner ma créativité
          et ma logique technique pour concevoir des sites performants et accessibles.
        </p>

        {/* Card Compétences & Méthodologie */}
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-md bg-[#313030] flex flex-col items-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
            Compétences & Méthodologie
          </h3>
          <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-card-foreground space-y-1 sm:space-y-2 text-center">
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

        {/* Conclusion */}
        <p className="text-sm sm:text-base md:text-lg text-primary font-semibold leading-relaxed text-center">
          Mon objectif est d'intégrer une équipe innovante où je pourrai continuer
          à développer mes compétences en Front-End et Back-End, et contribuer
          à des projets web performants et accessibles.
        </p>
      </div>
    </section>
  );
};

export default About;


