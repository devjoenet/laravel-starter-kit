import { cva, type VariantProps } from "class-variance-authority";

export const linkVariants = cva("link", {
  variants: {
    style: {
      normal: "",
      hover: "link-hover",
    },
    color: {
      neutral: "link-neutral",
      primary: "link-primary",
      secondary: "link-secondary",
      accent: "link-accent",
      info: "link-info",
      success: "link-success",
      warning: "link-warning",
      error: "link-error",
    },
  },
  defaultVariants: {
    style: "normal",
    color: "primary",
  },
});

export type LinkVariants = VariantProps<typeof linkVariants>;
