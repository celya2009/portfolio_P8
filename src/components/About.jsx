import React from "react";

const About = () => {
  return (
    <section id="about" aria-label="À propos de Malika Salhi" className="py-8 md:py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Titre principal */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
          À propos
        </h2>

        <div className="space-y-8 md:space-y-12">
          {/* Introduction */}
          <p className="text-sm sm:text-base md:text-lg text-card-foreground leading-relaxed text-center">
            Après une reconversion professionnelle, j'ai suivi la formation <strong className="text-primary">OpenClassrooms</strong> 
            pour devenir développeuse web. Cette expérience m'a permis de combiner ma créativité et ma logique technique 
            pour concevoir des sites performants et accessibles.
          </p>

          {/* Card Compétences & Méthodologie */}
          <div className="rounded-3xl p-4 sm:p-6 md:p-8 shadow-md bg-[#313030] flex flex-col justify-center items-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 text-center">
              Compétences & Méthodologie
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-card-foreground space-y-2 text-center">
              <li>
                <strong>Compétences techniques :</strong> Front-End (HTML5, CSS3, JavaScript, React, React Router), Back-End (Node.js, Express, MongoDB)
              </li>
              <li>
                <strong>Méthodologie :</strong> Agile, design-driven, priorité à l’accessibilité et aux performances
              </li>
              <li>
                <strong>Approche :</strong> Interface claire et intuitive, rigueur technique et lisibilité du code
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <p className="text-sm sm:text-base md:text-lg text-primary font-semibold leading-relaxed text-center">
            Mon objectif est d'intégrer une équipe innovante où je pourrai continuer à développer mes compétences 
            en Front-End et Back-End, et contribuer à des projets web performants et accessibles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
