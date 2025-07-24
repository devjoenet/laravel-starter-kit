import { cva } from "class-variance-authority";

export const listItemVariants = cva("list-row", {
  variants: {
    wrap: { true: "list-col-wrap", false: "" },
    grow: { true: "list-col-grow", false: "" },
  },
  defaultVariants: {
    wrap: false,
    grow: false,
  },
});
