import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("Tous");

  const projects = [
    {
      title: "Booki",
      description: "Intégration HTML/CSS à partir d'une maquette Figma, site entièrement responsive pour une plateforme de réservation d'hébergements.",
      technologies: ["HTML5", "CSS3", "Figma"],
      category: "Frontend"
    },
    {
      title: "Kasa",
      description: "Interface React avec navigation multi-pages via React Router, galerie de locations dynamique et composants réutilisables.",
      technologies: ["React", "React Router", "CSS3"],
      category: "React"
    },
    {
      title: "Mon Vieux Grimoire",
      description: "Back-End Node.js/Express/MongoDB avec opérations CRUD et authentification, démontrant ma polyvalence full-stack pour un site de notation de livres.",
      technologies: ["Node.js", "Express", "MongoDB"],
      category: "Backend"
    }
  ];

  const categories = ["Tous", "Frontend", "React", "Backend"];
  
  const filteredProjects = filter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">Projets</h2>
        
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8 md:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category ? "bg-primary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.title} className="border-border bg-card hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-muted text-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
