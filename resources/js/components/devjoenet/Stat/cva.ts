import { cva } from "class-variance-authority";

export const statsVariants = cva("stats", {
  variants: {
    direction: { horizontal: "stats-horizontal", vertical: "stats-vertical" },
  },
  defaultVariants: { direction: "horizontal" },
});
