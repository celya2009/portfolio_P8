import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

// Lazy load pour gros composants
const Projects = React.lazy(() => import('@/components/projects'));
const Skills = React.lazy(() => import('@/components/skills'));

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      {/* Suspense pour lazy load */}
      <Suspense fallback={<div>Chargement des projets...</div>}>
        <Projects />
      </Suspense>

      <Suspense fallback={<div>Chargement des compétences...</div>}>
        <Skills />
      </Suspense>
    </>
  );
};

export default Index;
