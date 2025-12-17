import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>

      <p className="mb-4 text-xl text-muted-foreground">
        Oups ! Page introuvable
      </p>

      <a
        href="/"
        className="text-primary font-semibold underline hover:opacity-80 transition"
      >
        Retour à l’accueil
      </a>
    </div>
  </div>
);


export default NotFound;

