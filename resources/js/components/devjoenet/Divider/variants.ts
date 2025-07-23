import { cva } from "class-variance-authority";

export const dividerVariants = cva("divider", {
  variants: {
    direction: {
      vertical: "divider-vertical",
      horizontal: "divider-horizontal",
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
    placement: {
      start: "divider-start",
      end: "divider-end",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});
