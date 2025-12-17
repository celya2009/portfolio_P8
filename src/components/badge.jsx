import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; 

// Définition des variantes de style
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // CTA (boutons)
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        // Badges de catégories / filtres
        filter:
          "border-primary text-primary bg-transparent hover:bg-primary/10",
        // Badge ACTIF (catégorie sélectionnée)
        active:
          "border-primary bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Composant Badge 
export const Badge = ({ className, variant, ...props }) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
);

// Export des variantes si besoin
export { badgeVariants };

