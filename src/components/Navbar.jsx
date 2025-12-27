import { useState } from "react";
import { Button } from "@/components/button";
import logo from "../assets/logo_sm.webp";
import "./navbar.css";

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { name: "Accueil", href: "#" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Parcours", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar bg-header">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-primary">Portfolio</span>
        </div>

        {/* Menu desktop */}
        <div className="navbar-menu-desktop">
          {navItems.map((item) => (
            <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-foreground hover:text-primary transition-colors">
              {item.name}
            </button>
          ))}
        </div>

     {/* Hamburger mobile */}
<Button
  variant="ghost"
  size="icon"
  className="md:hidden navbar-menu-toggle"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
  {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
</Button>

{/* Mobile menu overlay */}
{isMobileMenuOpen && (
  <div className="md:hidden navbar-menu-mobile">
    {navItems.map((item) => (
      <button
        key={item.name}
        onClick={() => scrollToSection(item.href)}
        className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
      >
        {item.name}
      </button>
    ))}
  </div>
)}
</div>
    </nav>
  );
};

export default Navbar;
