import { cva } from "class-variance-authority";

export const selectVariants = cva("select", {
  variants: {
    style: {
      default: "",
      ghost: "select-ghost",
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
    style: "default",
    size: "md",
  },
});
