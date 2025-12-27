import React from "react";
import { cn } from "@/lib/utils";

// Conteneur principal
export const Card = ({ className, ...props }) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
);

// Header (AUCUN padding / margin)
export const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col", className)} {...props} />
);

// Titre
export const CardTitle = ({ className, ...props }) => (
  <h3
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);

// Description
export const CardDescription = ({ className, ...props }) => (
  <p
    className={cn(
      "text-sm text-muted-foreground",
      className
    )}
    {...props}
  />
);

// Contenu (AUCUN padding)
export const CardContent = ({ className, ...props }) => (
  <div className={cn(className)} {...props} />
);

// Footer (AUCUN padding)
export const CardFooter = ({ className, ...props }) => (
  <div className={cn("flex items-center", className)} {...props} />
);
