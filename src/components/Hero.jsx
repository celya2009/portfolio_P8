import { Button } from "@/components/button";
import heroImage from "@/assets/hero.webp";

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
      id="hero"
      aria-label="Section d'accueil"
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 px-6 sm:px-8 overflow-hidden"
    >
      {/* Fond image + overlay */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Contenu centré */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl">
          Malika Salhi
        </h1>
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-semibold drop-shadow-md">
          Développeuse Full Stack Junior
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Passionnée par le Front-End et les interfaces interactives, avec un intérêt particulier pour l'accessibilité et la performance web.
        </p>

        <div className="mt-12 flex flex-col items-center gap-12">
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 md:gap-20 justify-center">
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
              className="px-8 py-4 text-lg bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              Voir mes projets
            </Button>
          </div>
          <ArrowDown className="text-white/80 animate-bounce" size={48} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
