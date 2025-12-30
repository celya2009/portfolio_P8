import heroImage from "@/assets/hero.webp";
import "./hero.css";

const ArrowDown = ({ className = "", size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    width={size}
    height={size}
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

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

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Me contacter
          </button>

          <button className="btn-outline" onClick={() => scrollTo("projects")}>
            Voir mes projets
          </button>
        </div>
      </div>

      {/* Flèche en bas */}
      <div className="hero-arrow">
        <ArrowDown size={48} />
      </div>
    </section>
  );
};

export default Hero;
