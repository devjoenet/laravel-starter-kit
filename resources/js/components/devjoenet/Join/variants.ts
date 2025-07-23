import { cva } from "class-variance-authority";

export const joinVariants = cva("join", {
  variants: {
    direction: {
      vertical: "join-vertical",
      horizontal: "join-horizontal",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});
