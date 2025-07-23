import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  "checkbox", // Base class
  {
    variants: {
      color: {
        primary: "checkbox-primary",
        secondary: "checkbox-secondary",
        accent: "checkbox-accent",
        neutral: "checkbox-neutral",
        success: "checkbox-success",
        warning: "checkbox-warning",
        info: "checkbox-info",
        error: "checkbox-error",
      },
      size: {
        xs: "checkbox-xs",
        sm: "checkbox-sm",
        md: "checkbox-md",
        lg: "checkbox-lg",
        xl: "checkbox-xl",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  },
);
