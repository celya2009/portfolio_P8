import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { buttonVariants } from "@/components/ui/button"; // si tu veux garder tes boutons
import { mergeClasses } from "@/lib/utils"; // notre fonction pour combiner les classes

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogPortal = AlertDialogPrimitive.Portal;

export const AlertDialogOverlay = ({ className, ...props }) => (
  <AlertDialogPrimitive.Overlay
    className={mergeClasses(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
);

export const AlertDialogContent = ({ className, children, ...props }) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      className={mergeClasses(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Content>
  </AlertDialogPortal>
);

export const AlertDialogHeader = ({ className, ...props }) => (
  <div className={mergeClasses("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);

export const AlertDialogFooter = ({ className, ...props }) => (
  <div className={mergeClasses("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);

export const AlertDialogTitle = ({ className, ...props }) => (
  <AlertDialogPrimitive.Title className={mergeClasses("text-lg font-semibold", className)} {...props} />
);

export const AlertDialogDescription = ({ className, ...props }) => (
  <AlertDialogPrimitive.Description className={mergeClasses("text-sm text-muted-foreground", className)} {...props} />
);

export const AlertDialogAction = ({ className, ...props }) => (
  <AlertDialogPrimitive.Action className={mergeClasses(buttonVariants(), className)} {...props} />
);

export const AlertDialogCancel = ({ className, ...props }) => (
  <AlertDialogPrimitive.Cancel className={mergeClasses(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)} {...props} />
);
