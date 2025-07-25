import { cva } from "class-variance-authority";

export const kbdVariants = cva("kbd", {
  variants: {
    size: {
      xs: "kbd-xs",
      sm: "kbd-sm",
      md: "kbd-md",
      lg: "kbd-lg",
      xl: "kbd-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
