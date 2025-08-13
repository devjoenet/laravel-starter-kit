// resources/js/components/ui/Card/cva.ts
import { cva } from "class-variance-authority";

// Runtime CVA
export const cardVariants = cva(
  "card shadow bg-base-100",
  {
    variants: {
      variant: {
        filled: "",              // default daisyui card
        outlined: "border",
        ghost: "bg-transparent shadow-none",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

// Explicit unions (avoid VariantProps to keep compiler happy)
export type CardVariant = "filled" | "outlined" | "ghost";
export type CardSize = "sm" | "md" | "lg";
