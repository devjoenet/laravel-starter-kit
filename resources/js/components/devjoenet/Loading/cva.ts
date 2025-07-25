import { cva } from "class-variance-authority";

export const loadingVariants = cva("loading", {
  variants: {
    style: {
      spinner: "loading-spinner",
      dots: "loading-dots",
      ring: "loading-ring",
      ball: "loading-ball",
      bars: "loading-bars",
      infinity: "loading-infinity",
    },
    size: {
      xs: "loading-xs",
      sm: "loading-sm",
      md: "loading-md",
      lg: "loading-lg",
      xl: "loading-xl",
    },
  },
  defaultVariants: {
    style: "spinner",
    size: "md",
  },
});
