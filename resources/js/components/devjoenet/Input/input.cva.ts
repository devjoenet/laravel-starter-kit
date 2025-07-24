import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "block w-full transition-colors duration-150 px-4 py-2 text-base rounded-md outline-none appearance-none bg-base-100",
    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary",
  ].join(" "),
  {
    variants: {
      variant: {
        filled: "bg-base-200 border border-base-300 focus:bg-base-100",
        outlined: "border-2 border-base-300 bg-transparent focus:bg-base-100",
      },
      state: {
        default: "",
        error: "border-error text-error focus:ring-error",
        success: "border-success text-success focus:ring-success",
        disabled: "opacity-60 pointer-events-none bg-base-200 text-base-content/60",
      },
    },
    defaultVariants: {
      variant: "filled",
      state: "default",
    },
  },
);
