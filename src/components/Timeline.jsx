import React from "react";

const Timeline = () => {
  const experiences = [
    {
      year: "Avril 2025 - Décembre 2025",
      title: "Formation Développement Web",
      company: "OpenClassrooms",
      description:
        "Formation intensive en développement web full stack - HTML5, CSS3, JavaScript, React, Node.js, Express, MongoDB",
    },
  ];

  return (
    <section id="timeline" className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
          Parcours
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 md:pl-8 border-l-2 border-primary pb-6 md:pb-8 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="bg-card border border-border rounded-lg p-4 sm:p-5 md:p-6">
                <div className="text-xs sm:text-sm text-primary font-semibold mb-2">
                  {exp.year}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                  {exp.title}
                </h3>
                <div className="text-secondary font-medium mb-3">{exp.company}</div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
