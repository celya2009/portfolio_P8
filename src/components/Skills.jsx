import { Badge } from "@/components/badge";

// Logos des compétences techniques
import htmlLogo from "@/assets/logos/html5.svg";
import cssLogo from "@/assets/logos/css.svg";
import jsLogo from "@/assets/logos/javascript.svg";
import reactLogo from "@/assets/logos/react.svg";
import nodeLogo from "@/assets/logos/nodejs.svg";
import mongoLogo from "@/assets/logos/mongodb.svg";
import sassLogo from "@/assets/logos/sass.svg";
import githubLogo from "@/assets/logos/github.svg";
import figmaLogo from "@/assets/logos/figma.svg";
import tailwindLogo from "@/assets/logos/tailwindcss.svg";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML5", logo: htmlLogo },
    { name: "CSS3", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "Sass", logo: sassLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "Figma", logo: figmaLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
  ];

  const softSkills = [
    "Travail d'équipe",
    "Communication",
    "Gestion de problèmes",
    "Adaptabilité",
    "Gestion de projet",
    "Créativité"
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-4 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">
          Compétences
        </h2>

        {/* Compétences Techniques */}
        <div 
          className="rounded-3xl p-4 mb-12 shadow-md"
          style={{ backgroundColor: '#313030ff'}} 
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            TECHNIQUES
          </h3>
         <div className="grid grid-cols-5 gap-4 justify-items-center">
  {technicalSkills.map(skill => (
    <div key={skill.name} className="flex flex-col items-center gap-1">
      <img 
        src={skill.logo} 
        alt={skill.name} 
        className="w-10 h-10"
        style={{ filter: "invert(31%) sepia(95%) saturate(610%) hue-rotate(10deg) brightness(95%) contrast(90%)" }}
      />
      <span className="text-sm md:text-base font-semibold text-white">
        {skill.name}
      </span>
    </div>
  ))}
</div>
</div>


        {/* Compétences Humaines */}
        <div 
          className="rounded-3xl p-4 shadow-md"
          style={{ backgroundColor: '#313030ff' }} 
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            HUMAINES
          </h3>
          <div className="grid grid-cols-3 gap-3 justify-items-center">
            {softSkills.map(skill => (
           
           <Badge 
           key={skill} 
           variant="outline" 
           className="text-white font-bold w-36 h-12 flex items-center justify-center"
           style={{ backgroundColor: '#D97706', borderColor: '#D97706' }} >
           {skill}
           </Badge>

            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

