import { cva } from "class-variance-authority";

export const navbarVariants = cva("navbar", {
  variants: {
    color: {
      base: "bg-base-100",
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
      info: "bg-info",
      success: "bg-success",
      warning: "bg-warning",
      error: "bg-error",
    },
    shadow: {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
    position: {
      static: "",
      fixed: "fixed w-full top-0",
      sticky: "sticky w-full top-0",
    },
    padding: {
      none: "",
      sm: "px-2",
      md: "px-4",
      lg: "px-6",
    },
  },
  defaultVariants: {
    color: "base",
    shadow: "none",
    position: "static",
    padding: "md",
  },
});
