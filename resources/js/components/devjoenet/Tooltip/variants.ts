import { cva } from "class-variance-authority";

export const tooltipVariants = cva("tooltip", {
  variants: {
    placement: {
      top: "tooltip-top",
      bottom: "tooltip-bottom",
      left: "tooltip-left",
      right: "tooltip-right",
    },
    color: {
      primary: "tooltip-primary",
      secondary: "tooltip-secondary",
      accent: "tooltip-accent",
      info: "tooltip-info",
      success: "tooltip-success",
      warning: "tooltip-warning",
      error: "tooltip-error",
    },
    open: {
      true: "tooltip-open",
    },
  },
  defaultVariants: {
    placement: "top",
  },
});
