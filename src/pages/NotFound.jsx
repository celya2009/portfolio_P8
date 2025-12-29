import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => (
  <div className="">
    <div className="">
      <h1 className="">404</h1>

      <p className="">
        Oups ! Page introuvable
      </p>

      <a
        href="/"
        className=""
      >
        Retour à l’accueil
      </a>
    </div>
  </div>
);


export default NotFound;

