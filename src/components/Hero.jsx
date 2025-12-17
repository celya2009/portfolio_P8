import { Button } from "@/components/button";
import heroImage from "@/assets/hero.webp";

// Composant ArrowDown en SVG
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
    <section
      aria-label="Section d'accueil"
      className="relative w-full flex flex-col overflow-hidden h-screen"
    >
      {/* Image hero */}
      <img
        src={heroImage}
        alt="Profil développeur"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenu centré */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-3/4 md:w-1/2 text-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
          Malika Salhi
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl text-white/90 font-semibold mt-2">
          Développeuse Full Stack Junior
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-white/80 mt-4 leading-snug sm:leading-relaxed">
          Passionnée par le Front-End et les interfaces interactives, avec un
          intérêt particulier pour l'accessibilité et la performance web.
        </p>
      </div>

      {/* Conteneur boutons + flèche */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-10
                      bottom-6 sm:bottom-10 md:bottom-13">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-10">
          <Button
            onClick={() => scrollTo("contact")}
            size="md"
            className="w-32 sm:w-36 md:w-48 px-4 sm:px-6 md:px-8 bg-primary border-primary text-white hover:bg-primary/90"
          >
            Me contacter
          </Button>

          <Button
            onClick={() => scrollTo("projects")}
            size="md"
            className="w-32 sm:w-36 md:w-48 px-4 sm:px-6 md:px-8 bg-primary border-primary text-white hover:bg-primary/90"
          >
            Voir mes projets
          </Button>
        </div>

        <ArrowDown className="text-white/80 animate-bounce mt-2" size={32} />
      </div>
    </section>
  );
};

export default Hero;
