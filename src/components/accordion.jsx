import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

// Fonction simple pour combiner les classes CSS
const mergeClasses = (...classes) => classes.filter(Boolean).join(" ");

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = ({ className, ...props }) => {
  return (
    <AccordionPrimitive.Item
      className={mergeClasses("border-b", className)}
      {...props}
    />
  );
};

export const AccordionTrigger = ({ className, children, ...props }) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={mergeClasses(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

export const AccordionContent = ({ className, children, ...props }) => {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={mergeClasses("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
};
