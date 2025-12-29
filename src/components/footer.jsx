import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-footer border-t border-border" role="contentinfo">
      <div className="footer-container">
        {/* Texte copyright à gauche */}
        <p className="footer-left text-foreground">
          © {new Date().getFullYear()} Portfolio
        </p>

        {/* Liens à droite */}
        <nav className="footer-right" aria-label="Liens vers mes profils">
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
