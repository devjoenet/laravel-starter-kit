import { cva } from "class-variance-authority";

export const dockVariants = cva(
  "dock", // Base class
  {
    variants: {
      size: {
        xs: "dock-xs",
        sm: "dock-sm",
        md: "dock-md",
        lg: "dock-lg",
        xl: "dock-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
