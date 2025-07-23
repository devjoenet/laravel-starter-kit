import { cva } from "class-variance-authority";

export const buttonVariants = cva("btn", {
  variants: {
    color: {
      neutral: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
    },
    btnStyle: {
      outline: "btn-outline",
      dash: "btn-dash",
      soft: "btn-soft",
      ghost: "btn-ghost",
      link: "btn-link",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
    },
    shape: {
      wide: "btn-wide",
      block: "btn-block",
      square: "btn-square",
      circle: "btn-circle",
    },
    active: {
      true: "btn-active",
    },
    disabled: {
      true: "btn-disabled",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});
