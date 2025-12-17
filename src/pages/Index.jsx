import React, { Suspense } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Timeline from "@/components/timeline";
import Contact from "@/components/contact";
import Footer from "@/components/footer";


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
      <Suspense fallback={<div>Chargement des compétences...</div>}>
        <Skills />
      </Suspense>

      <Suspense fallback={<div>Chargement des projets...</div>}>
        <Projects />
      </Suspense>

      <Timeline />
      <Contact />
      <Footer/> 

    </>
  );
};

export default Index;
