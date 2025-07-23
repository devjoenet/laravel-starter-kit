import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "card", // Base class
  {
    variants: {
      cardStyle: {
        border: "card-border",
        dash: "card-dash",
      },
      layout: {
        side: "card-side",
        "image-full": "image-full",
      },
      size: {
        xs: "card-xs",
        sm: "card-sm",
        md: "card-md",
        lg: "card-lg",
        xl: "card-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
