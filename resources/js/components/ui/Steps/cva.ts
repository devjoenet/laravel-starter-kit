import { cva } from "class-variance-authority";

export const stepsVariants = cva("steps", {
  variants: {
    direction: {
      horizontal: "steps-horizontal",
      vertical: "steps-vertical",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});
