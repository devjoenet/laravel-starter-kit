import { cva } from "class-variance-authority";

export const menuVariants = cva("menu p-2 bg-base-100 text-base-content", {
  variants: {
    direction: {
      vertical: "menu-vertical",
      horizontal: "menu-horizontal",
    },
    style: {
      default: "",
      compact: "menu-compact",
      dropdown: "menu-dropdown",
    },
  },
  defaultVariants: {
    direction: "vertical",
    style: "default",
  },
});
