import { Button } from "@/components/button";
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
 <section id="hero" className="hero-section">
  {/* Fond image + overlay */}
  <div className="hero-background">
    <img src={heroImage} alt="" aria-hidden="true" className="hero-image" />
    <div className="hero-overlay" />
  </div>

  {/* Contenu centré */}
  <div className="hero-content">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-600 drop-shadow-2xl">
      Malika Salhi
    </h1>

    <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 font-semibold drop-shadow-md">
      Développeuse Full Stack Junior
    </h2>

    <p className="mt-6 text-base sm:text-lg md:text-3xl lg:text-4xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Passionnée par le Front-End et les interfaces interactives, avec un intérêt particulier pour l'accessibilité et la performance web.
    </p>

    <div className="hero-actions">
      <div className="hero-buttons">
        <Button
          onClick={() => scrollTo("contact")}
          size="lg"
          className="px-8 py-4 text-lg bg-primary text-white hover:bg-primary/90"
        >
          Me contacter
        </Button>

        <Button
          onClick={() => scrollTo("projects")}
          size="lg"
          className="px-8 py-4 text-lg bg-black/40 text-white hover:bg-black/50"
        >
          Voir mes projets
        </Button>
      </div>
    </div>
  </div>

  {/* FLÈCHE — EN DEHORS DU CONTENU */}
  <div className="hero-arrow">
    <ArrowDown className="text-white/80 animate-bounce" size={48} />
  </div>
</section>

  );
};

export default Hero;
