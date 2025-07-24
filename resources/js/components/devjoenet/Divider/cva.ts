import { cva } from "class-variance-authority";

export const dividerVariants = cva("divider", {
  variants: {
    direction: {
      horizontal: "",
      vertical: "divider-vertical",
    },
    color: {
      neutral: "divider-neutral",
      primary: "divider-primary",
      secondary: "divider-secondary",
      accent: "divider-accent",
      success: "divider-success",
      warning: "divider-warning",
      info: "divider-info",
      error: "divider-error",
    },
  },
  defaultVariants: {
    direction: "horizontal",
    color: "neutral",
  },
});
