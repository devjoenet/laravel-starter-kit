import { cva } from "class-variance-authority";

export const ratingVariants = cva(
  "rating", // Base class
  {
    variants: {
      size: {
        xs: "rating-xs",
        sm: "rating-sm",
        md: "rating-md",
        lg: "rating-lg",
        xl: "rating-xl",
      },
      half: {
        true: "rating-half",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
