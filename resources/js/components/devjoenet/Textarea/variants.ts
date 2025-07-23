import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  "textarea w-full", // Base classes
  {
    variants: {
      variant: {
        outlined: "textarea-bordered",
        filled: "textarea-ghost bg-base-200 border-b-2 border-transparent focus:border-primary",
      },
      color: {
        neutral: "textarea-neutral",
        primary: "textarea-primary",
        secondary: "textarea-secondary",
        accent: "textarea-accent",
        info: "textarea-info",
        success: "textarea-success",
        warning: "textarea-warning",
        error: "textarea-error",
      },
      size: {
        xs: "textarea-xs",
        sm: "textarea-sm",
        md: "textarea-md",
        lg: "textarea-lg",
        xl: "textarea-xl",
      },
    },
    defaultVariants: {
      variant: "outlined",
      size: "md",
    },
  },
);
