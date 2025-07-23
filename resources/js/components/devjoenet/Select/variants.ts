import { cva } from "class-variance-authority";

export const selectVariants = cva(
  "input w-full inline-flex items-center text-left", // Base classes
  {
    variants: {
      variant: {
        outlined: "input-bordered",
        filled: "input-ghost bg-base-200 border-b-2 border-transparent focus-within:border-primary",
      },
      color: {
        neutral: "select-neutral",
        primary: "select-primary",
        secondary: "select-secondary",
        accent: "select-accent",
        info: "select-info",
        success: "select-success",
        warning: "select-warning",
        error: "select-error",
      },
      size: {
        xs: "select-xs",
        sm: "select-sm",
        md: "select-md",
        lg: "select-lg",
        xl: "select-xl",
      },
    },
    defaultVariants: {
      variant: "outlined",
      size: "md",
    },
  },
);
