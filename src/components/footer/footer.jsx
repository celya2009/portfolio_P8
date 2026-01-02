import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section" role="contentinfo">
      <div className="footer-container">
         <nav className="footer-right" aria-label="Liens vers mes profils">
          <a href="https://github.com/celya2009" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/malika-salhi-6357a939a/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:sousstizni@hotmail.fr">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
