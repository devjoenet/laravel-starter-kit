import { cva } from "class-variance-authority";

export const fileInputVariants = cva("file-input", {
  variants: {
    style: {
      default: "",
      ghost: "file-input-ghost",
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
    style: "default",
    size: "md",
  },
});
