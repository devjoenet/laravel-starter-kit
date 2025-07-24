import { cva } from "class-variance-authority";

export const joinVariants = cva("join", {
  variants: {
    direction: {
      horizontal: "",
      vertical: "join-vertical",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});
