import React, { Suspense } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Timeline from "@/components/timeline";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const Projects = React.lazy(() => import("@/components/projects"));
const Skills = React.lazy(() => import("@/components/skills"));

const Index = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <main className="flex flex-col overflow-x-hidden">
        {/* Toutes les sections suivent le même flux */}
        <Hero />
        <About />

        <Suspense fallback={<div className="py-20 text-center">Chargement des compétences...</div>}>
          <Skills />
        </Suspense>

        <Suspense fallback={<div className="py-20 text-center">Chargement des projets...</div>}>
          <Projects />
        </Suspense>

        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;
