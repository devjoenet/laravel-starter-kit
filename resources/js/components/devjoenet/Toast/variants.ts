import { cva } from "class-variance-authority";

export const toastVariants = cva("toast", {
  variants: {
    horizontal: {
      start: "toast-start",
      center: "toast-center",
      end: "toast-end",
    },
    vertical: {
      top: "toast-top",
      middle: "toast-middle",
      bottom: "toast-bottom",
    },
  },
  defaultVariants: {
    horizontal: "end",
    vertical: "bottom",
  },
});
