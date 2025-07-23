import { cva } from "class-variance-authority";

export const progressVariants = cva("progress", {
  variants: {
    color: {
      neutral: "progress-neutral",
      primary: "progress-primary",
      secondary: "progress-secondary",
      accent: "progress-accent",
      info: "progress-info",
      success: "progress-success",
      warning: "progress-warning",
      error: "progress-error",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});
