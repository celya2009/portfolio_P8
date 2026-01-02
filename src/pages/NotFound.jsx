import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => (
  <div>
    <div>
      <h1>404</h1>
      <p>Oups ! Page introuvable</p>
      <a href="/">Retour à l’accueil</a>
    </div>
  </div>
);

export default NotFound;


