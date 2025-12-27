import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer
      className="w-full bg-footer  border-t border-border"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center h-16">
        {/* Texte copyright */}
        <p className="text-foreground text-sm mb-2 sm:mb-0">
          © {new Date().getFullYear()} Portfolio
        </p>

        {/* Liens */}
        <nav className="flex gap-6" aria-label="Liens vers mes profils">
          <a
            href="https://github.com/celya2009"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/malika-salhi-6357a939a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sousstizni@hotmail.fr"
            className="text-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
