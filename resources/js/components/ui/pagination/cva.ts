import { cva } from "class-variance-authority";

export const paginationVariants = cva("join", {
  variants: {
    size: {
      sm: "join-sm",
      md: "",
      lg: "join-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
