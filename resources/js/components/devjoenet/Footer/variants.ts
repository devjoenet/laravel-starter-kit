import { cva } from "class-variance-authority";

export const footerVariants = cva("footer p-10", {
  variants: {
    placement: {
      center: "footer-center",
    },
    direction: {
      horizontal: "footer-horizontal",
      vertical: "footer-vertical",
    },
  },
});
