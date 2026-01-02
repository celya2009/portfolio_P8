import React from "react";
import "./button.css";

export default function Button({ children, type = "primary", onClick }) {
  const className = type === "primary" ? "button-primary" : "button-outline";

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}