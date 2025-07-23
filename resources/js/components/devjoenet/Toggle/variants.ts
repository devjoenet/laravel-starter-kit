import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  "toggle", // Base class
  {
    variants: {
      color: {
        primary: "toggle-primary",
        secondary: "toggle-secondary",
        accent: "toggle-accent",
        neutral: "toggle-neutral",
        success: "toggle-success",
        warning: "toggle-warning",
        info: "toggle-info",
        error: "toggle-error",
      },
      size: {
        xs: "toggle-xs",
        sm: "toggle-sm",
        md: "toggle-md",
        lg: "toggle-lg",
        xl: "toggle-xl",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  },
);
