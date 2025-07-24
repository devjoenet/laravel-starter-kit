import { cva } from "class-variance-authority";

export const cardVariants = cva("card bg-base-100 shadow-md overflow-hidden", {
  variants: {
    style: {
      none: "",
      bordered: "card-border",
      dash: "card-dash",
    },
    side: {
      vertical: "",
      horizontal: "card-side",
    },
    imageFull: {
      true: "image-full",
      false: "",
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
    style: "none",
    side: "vertical",
    imageFull: false,
    size: "md",
  },
});
