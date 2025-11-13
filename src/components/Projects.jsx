import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

const Projects = () => {
  const [filter, setFilter] = useState("Tous");

  const projects = [
    {
      title: "Booki",
      description: "Intégration HTML/CSS à partir d'une maquette Figma, site responsive pour réservation d'hébergements.",
      technologies: ["HTML5", "CSS3", "Figma"],
      category: "Frontend"
    },
    {
      title: "Kasa",
      description: "Interface React avec navigation multi-pages via React Router et composants réutilisables.",
      technologies: ["React", "React Router", "CSS3"],
      category: "React"
    },
    {
      title: "Mon Vieux Grimoire",
      description: "Back-End Node.js/Express/MongoDB avec CRUD et authentification, site de notation de livres.",
      technologies: ["Node.js", "Express", "MongoDB"],
      category: "Backend"
    }
  ];

  const categories = ["Tous", "Frontend", "React", "Backend"];
  const filteredProjects = filter === "Tous" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">Projets</h2>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 md:mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Cartes projets */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          {filteredProjects.map(project => (
            <Card key={project.title} className="border-border bg-card hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">
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
