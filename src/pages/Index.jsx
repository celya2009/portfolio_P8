import React from "react";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";
import Timeline from "@/components/timeline/timeline";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

const Index = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <main className="main">
        {/* Hero */}
        <Hero />  {/* h1 = Malika Salhi, h2 = Développeuse Full Stack Junior, p = description */}

        {/* About */}
        <About /> {/* h2 = À propos, h3 = Compétences & Méthodologie, p = texte explicatif */}

        {/* Skills */}
        <Skills /> {/* h2 = Compétences, p = intro et info bottom, h3 = titre modal */}

        {/* Projects */}
        <Projects /> {/* h2 = Projets, h3 = titre projet, p = description projet */}

        {/* Timeline */}
        <Timeline /> {/* h2 = Parcours, h3 = titre expérience, p = description */}

        {/* Contact */}
        <Contact /> {/* h2 = Contact, h3 = titres cartes, p = texte descriptif */}
      </main>

      <Footer />
    </>
  );
};

export default Index;
