import { cva } from "class-variance-authority";

export const accordionItemVariants = cva("collapse", {
  variants: {
    style: {
      arrow: "collapse-arrow",
      plus: "collapse-plus",
    },
  },
});
