import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import developerProfile from "@/assets/developer-profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="relative w-64 h-48 md:w-80 md:h-60 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-30 animate-pulse"></div>
          <img 
            src={developerProfile} 
            alt="Malika Salhi - Développeuse Web Full Stack"
            className="relative w-full h-full object-cover rounded-2xl border-4 border-primary shadow-2xl shadow-primary/40"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Malika Salhi
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold">
            Développeuse Full Stack Junior
          </p>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Passionnée par le Front-End et les interfaces interactives, avec un intérêt 
          particulier pour l'accessibilité et la performance web.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            Me contacter
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-muted"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Voir mes projets
          </Button>
        </div>
        <div className="pt-12 animate-bounce">
          <ArrowDown className="mx-auto text-muted-foreground" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
