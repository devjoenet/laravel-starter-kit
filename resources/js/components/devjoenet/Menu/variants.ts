import { cva } from "class-variance-authority";

export const menuVariants = cva(
  "menu", // Base class
  {
    variants: {
      direction: {
        vertical: "menu-vertical",
        horizontal: "menu-horizontal",
      },
      size: {
        xs: "menu-xs",
        sm: "menu-sm",
        md: "menu-md",
        lg: "menu-lg",
        xl: "menu-xl",
      },
    },
    defaultVariants: {
      direction: "vertical",
      size: "md",
    },
  },
);
