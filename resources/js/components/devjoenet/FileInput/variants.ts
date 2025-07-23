import { cva } from "class-variance-authority";

export const fileInputVariants = cva(
  "file-input w-full", // Base classes
  {
    variants: {
      variant: {
        outlined: "file-input-bordered",
        filled: "file-input-ghost bg-base-200 border-b-2 border-transparent focus:border-primary",
      },
      color: {
        neutral: "file-input-neutral",
        primary: "file-input-primary",
        secondary: "file-input-secondary",
        accent: "file-input-accent",
        info: "file-input-info",
        success: "file-input-success",
        warning: "file-input-warning",
        error: "file-input-error",
      },
      size: {
        xs: "file-input-xs",
        sm: "file-input-sm",
        md: "file-input-md",
        lg: "file-input-lg",
        xl: "file-input-xl",
      },
    },
    defaultVariants: {
      variant: "outlined",
      size: "md",
    },
  },
);
