import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { mergeClasses } from "@/lib/utils";

// Composant principal Breadcrumb
export const Breadcrumb = (props) => <nav aria-label="breadcrumb" {...props} />;

// Liste des éléments
export const BreadcrumbList = ({ className, ...props }) => (
  <ol
    className={mergeClasses(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
);

// Élément de breadcrumb
export const BreadcrumbItem = ({ className, ...props }) => (
  <li className={mergeClasses("inline-flex items-center gap-1.5", className)} {...props} />
);

// Lien dans le breadcrumb
export const BreadcrumbLink = ({ asChild, className, ...props }) => {
  const Comp = asChild ? Slot : "a";
  return <Comp className={mergeClasses("transition-colors hover:text-foreground", className)} {...props} />;
};

// Page actuelle dans le breadcrumb
export const BreadcrumbPage = ({ className, ...props }) => (
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={mergeClasses("font-normal text-foreground", className)}
    {...props}
  />
);

// Séparateur entre les éléments
export const BreadcrumbSeparator = ({ children, className, ...props }) => (
  <li role="presentation" aria-hidden="true" className={mergeClasses("[&>svg]:size-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);

// Ellipsis si trop d’éléments
export const BreadcrumbEllipsis = ({ className, ...props }) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={mergeClasses("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
