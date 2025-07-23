import { cva } from "class-variance-authority";

export const collapseVariants = cva(
  "collapse", // Base class
  {
    variants: {
      collapseStyle: {
        arrow: "collapse-arrow",
        plus: "collapse-plus",
      },
      isOpen: {
        true: "collapse-open",
      },
    },
    defaultVariants: {
      collapseStyle: "arrow",
    },
  },
);
