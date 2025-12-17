import { Button } from "@/components/button";
import profildeveloppeur from "@/assets/profil-developpeur.webp";

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
      className="relative h-[600px] sm:h-[700px] md:h-screen w-full flex flex-col overflow-hidden"
    >
      {/* Image hero lazy */}
      <img
        src={profildeveloppeur}
        alt="Profil développeur"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenu centré */}
<div 
  className="absolute z-10 text-center"
  style={{ 
    top: "50%", 
    left: "45%", 
    width: "35%", 
    transform: "translate(-50%, -50%)" 
  }}
>
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
    Malika Salhi
  </h1>
  <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-semibold mt-2">
    Développeuse Full Stack Junior
  </h2>
  <p className="text-base sm:text-lg md:text-xl text-white/80 mt-4 leading-relaxed">
    Passionnée par le Front-End et les interfaces interactives,
    avec un intérêt particulier pour l'accessibilité et la performance web.
  </p>
</div>


     {/* Boutons */}
<div
  className="absolute left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-14 justify-center items-center px-4"
  style={{ bottom: "calc(24px)" }} 
>
  <Button
    onClick={() => scrollTo("contact")}
    size="lg"
    className="px-8 w-48 bg-primary border-primary text-white hover:bg-primary/90"
  >
    Me contacter
  </Button>

  <Button
    onClick={() => scrollTo("projects")}
    size="lg"
    className="px-8 w-48 bg-primary border-primary text-white hover:bg-primary/90"
  >
    Voir mes projets
  </Button>
</div>

{/* Flèche */}
<div
  className="absolute animate-bounce"
  style={{
    bottom: "5px",       // plus bas
    left: "49%",         // un peu à gauche par rapport au centre
    transform: "translateX(-50%)"
  }}
>
  <ArrowDown className="text-white/80" size={32} />
</div>
      
    </section>
  );
};

export default Hero;
