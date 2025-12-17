import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full bg-[hsl(var(--background))] border-t border-border"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center h-16">
        <p className="text-foreground text-sm">© {new Date().getFullYear()} Portfolio</p>
        <nav
          className="ml-6 flex gap-6"
          aria-label="Liens vers mes profils"
        >
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
