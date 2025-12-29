import React from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Timeline from "@/components/timeline";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Skills from "@/components/skills";


const Index = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;
