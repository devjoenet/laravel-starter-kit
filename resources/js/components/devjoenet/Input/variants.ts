import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "input w-full", // Base classes
  {
    variants: {
      variant: {
        outlined: "input-bordered",
        filled: "input-ghost bg-base-200 border-b-2 border-transparent focus:border-primary",
      },
    },
    defaultVariants: {
      variant: "outlined",
    },
  },
);
