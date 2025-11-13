const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
          À propos
        </h2>
        <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6">
          <p className="text-base md:text-lg text-card-foreground leading-relaxed">
            Après une reconversion professionnelle, j'ai suivi la formation OpenClassrooms
            pour devenir développeuse web. Cette expérience m'a permis de combiner ma créativité
            et ma logique technique pour concevoir des sites performants et accessibles.
          </p>
          <p className="text-base md:text-lg text-card-foreground leading-relaxed">
            Je maîtrise <strong className="text-primary">HTML5, CSS3, JavaScript ES6+, React et React Router</strong>, 
            ainsi que <strong className="text-primary">Node.js, Express et MongoDB</strong>. J'ai développé une expertise 
            en intégration responsive, création de composants modulaires et gestion de données sécurisée.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Mon approche combine méthodologie Agile et design-driven, avec une attention particulière 
            à l'accessibilité, aux performances et à la lisibilité du code. Je privilégie une interface 
            claire et intuitive tout en gardant une rigueur technique.
          </p>
          <p className="text-base md:text-lg text-primary font-semibold leading-relaxed">
            Mon objectif est d'intégrer une équipe produit innovante où je pourrai continuer à développer 
            mes compétences en Front-End et Back-End, et contribuer à des projets web performants et accessibles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
