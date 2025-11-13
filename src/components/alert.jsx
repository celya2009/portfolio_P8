import React from "react";
import { cva } from "class-variance-authority"; // si tu veux garder les variantes
import { mergeClasses } from "@/lib/utils"; // notre fonction pour combiner les classes

// Définition des variantes de style
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Composant principal
export const Alert = ({ className, variant, ...props }) => (
  <div role="alert" className={mergeClasses(alertVariants({ variant }), className)} {...props} />
);

// Titre de l'alerte
export const AlertTitle = ({ className, ...props }) => (
  <h5 className={mergeClasses("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
);

// Description de l'alerte
export const AlertDescription = ({ className, ...props }) => (
  <div className={mergeClasses("text-sm [&_p]:leading-relaxed", className)} {...props} />
);
