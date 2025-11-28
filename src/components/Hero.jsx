import { Button } from "@/components/button";
import { ArrowDown } from "lucide-react";
import profildeveloppeur from "@/assets/profil-developpeur.png";

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-[600px] md:h-screen w-full flex flex-col"
      style={{
        backgroundImage: `url(${profildeveloppeur})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXTE centré verticalement */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Malika Salhi
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 font-semibold mt-2">
          Développeuse Full Stack Junior
        </p>

        {/* Speech agrandi et aéré */}
        <p className="text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto mt-6 leading-relaxed">
          Passionnée par le Front-End et les interfaces interactives, 
          avec un intérêt particulier pour l'accessibilité et la performance web.
        </p>
      </div>

      {/* BOUTONS + FLÈCHE collés en bas de l'image */}
      <div className="relative z-10 flex flex-col items-center gap-4 mb-8 px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Bouton Me contacter */}
          <Button
            onClick={() => scrollTo("contact")}
            size="lg"
            className="px-8 w-48 bg-primary border-primary text-white hover:bg-primary/90"
          >
            Me contacter
          </Button>

          {/* Bouton Voir mes projets */}
          <Button
            onClick={() => scrollTo("projects")}
            size="lg"
            className="px-8 w-48 bg-primary border-primary text-white hover:bg-primary/90"
          >
            Voir mes projets
          </Button>
        </div>

        {/* Flèche centrée sous les boutons */}
        <div className="animate-bounce mt-2">
          <ArrowDown className="text-white/80" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
