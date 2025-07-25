import { cva } from "class-variance-authority";

export const indicatorItemVariants = cva("indicator-item", {
  variants: {
    placement: {
      start: "indicator-start",
      middle: "indicator-middle",
      end: "indicator-end",
      top: "indicator-top",
      bottom: "indicator-bottom",
    },
  },
  defaultVariants: {
    placement: "end",
  },
});
