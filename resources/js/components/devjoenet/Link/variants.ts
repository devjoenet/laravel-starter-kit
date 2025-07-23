import { cva } from "class-variance-authority";

export const linkVariants = cva(
  "link", // Base class
  {
    variants: {
      linkStyle: {
        hover: "link-hover",
      },
      color: {
        neutral: "link-neutral",
        primary: "link-primary",
        secondary: "link-secondary",
        accent: "link-accent",
        success: "link-success",
        info: "link-info",
        warning: "link-warning",
        error: "link-error",
      },
    },
  },
);
