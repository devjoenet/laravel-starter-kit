import { cva } from "class-variance-authority";

export const modalContentVariants = cva("modal-box relative p-6 bg-base-100 rounded-lg shadow-lg", {
  variants: {
    size: {
      sm: "modal-sm",
      md: "modal-md",
      lg: "modal-lg",
      xl: "modal-xl",
      full: "modal-full",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
