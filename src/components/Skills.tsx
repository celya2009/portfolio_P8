import { Badge } from "@/components/ui/badge";
import skillsIllustration from "@/assets/skills-illustration.png";

const Skills = () => {
  const technicalSkills = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js",
    "Next.js", "Tailwind CSS", "Git", "PostgreSQL", "MongoDB", "REST API"
  ];

  const softSkills = [
    "Travail d'équipe", "Communication", "Résolution de problèmes",
    "Adaptabilité", "Gestion de projet", "Créativité"
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">Compétences</h2>
        
        <div className="mb-12 rounded-lg overflow-hidden max-w-2xl mx-auto">
          <img 
            src={skillsIllustration} 
            alt="Illustration des compétences techniques - développeuse avec HTML5, CSS3, JavaScript, TypeScript, React, Node.js, Next.js, Tailwind CSS, Git, PostgreSQL, MongoDB, REST API" 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="space-y-8">
          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6">Compétences techniques</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-4 md:mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
