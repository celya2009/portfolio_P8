import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { mergeClasses } from "@/lib/utils";

// Composant principal Avatar
export const Avatar = ({ className, ...props }) => (
  <AvatarPrimitive.Root
    className={mergeClasses("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
);

// Image de l'avatar
export const AvatarImage = ({ className, ...props }) => (
  <AvatarPrimitive.Image
    className={mergeClasses("aspect-square h-full w-full", className)}
    {...props}
  />
);

// Fallback si l'image ne charge pas
export const AvatarFallback = ({ className, ...props }) => (
  <AvatarPrimitive.Fallback
    className={mergeClasses("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
);
