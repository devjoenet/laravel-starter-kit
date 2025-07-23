import { cva } from "class-variance-authority";

export const alertVariants = cva("alert", {
  variants: {
    alertStyle: {
      outline: "alert-outline",
      dash: "alert-dash",
      soft: "alert-soft",
    },
    color: {
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    },
    direction: {
      vertical: "alert-vertical",
      horizontal: "alert-horizontal",
    },
  },
  defaultVariants: {
    color: "info",
    direction: "horizontal",
  },
});
