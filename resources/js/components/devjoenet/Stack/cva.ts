import { cva } from "class-variance-authority";

export const stackVariants = cva("stack", {
  variants: {
    direction: {
      row: "",
      col: "stack-vertical",
    },
    placement: {
      start: "stack-top stack-start",
      center: "stack-middle stack-center",
      end: "stack-bottom stack-end",
    },
  },
  defaultVariants: {
    direction: "row",
    placement: "start",
  },
});
