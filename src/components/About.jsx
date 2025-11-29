const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
          À propos
        </h2>

        <div className="space-y-6">
          <p className="text-base md:text-lg text-card-foreground leading-relaxed">
            Après une reconversion professionnelle, j'ai suivi la formation <strong className="text-primary">OpenClassrooms</strong> 
            pour devenir développeuse web. Cette expérience m'a permis de combiner ma créativité et ma logique technique 
            pour concevoir des sites performants et accessibles.
          </p>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">Compétences techniques</h3>
            <ul className="list-disc list-inside text-base md:text-lg text-card-foreground space-y-1">
              <li><strong>Front-End :</strong> HTML5, CSS3, JavaScript, React, React Router</li>
              <li><strong>Back-End :</strong> Node.js, Express, MongoDB</li>
              <li><strong>Expertise :</strong> intégration responsive, composants modulaires, gestion sécurisée des données</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">Méthodologie & approche</h3>
            <ul className="list-disc list-inside text-base md:text-lg text-card-foreground space-y-1">
              <li>Méthodologie <strong>Agile</strong> et <strong>design-driven</strong></li>
              <li>Priorité à l’<strong>accessibilité</strong>, aux <strong>performances</strong> et à la <strong>lisibilité du code</strong></li>
              <li>Interface <strong>claire et intuitive</strong> avec rigueur technique</li>
            </ul>
          </div>

          <p className="text-base md:text-lg text-primary font-semibold leading-relaxed">
            Mon objectif est d'intégrer une équipe produit innovante où je pourrai continuer à développer mes compétences 
            en Front-End et Back-End, et contribuer à des projets web performants et accessibles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
