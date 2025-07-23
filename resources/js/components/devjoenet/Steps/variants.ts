import { cva } from "class-variance-authority";

export const stepsVariants = cva("steps", {
  variants: {
    direction: {
      vertical: "steps-vertical",
      horizontal: "steps-horizontal",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});
