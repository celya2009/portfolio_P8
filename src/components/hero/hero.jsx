import React from "react";
import heroImage from "@/assets/hero.webp";
import Button from "@/components/button/button"; 
import "./hero.css";

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="section">
      {/* Fond image + overlay */}
      <div className="hero-background">
        <img src={heroImage} alt="" aria-hidden="true" className="hero-image" />
        <div className="hero-overlay" />
      </div>

      {/* Contenu centré */}
      <div className="hero-content">
        <h1>Malika Salhi</h1>
        <h2>Développeuse Full Stack Junior</h2>
        <p>
          Passionnée par le Front-End et les interfaces interactives, avec un intérêt particulier
          pour l'accessibilité et la performance web.
        </p>

        <div className="hero-button">
          <Button type="primary" onClick={() => scrollTo("contact")}>
            Me contacter
          </Button>

          <Button type="outline" onClick={() => scrollTo("projects")}>
            Voir mes projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
