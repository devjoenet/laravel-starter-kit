import { cva } from "class-variance-authority";

export const carouselVariants = cva(
  "carousel", // Base class
  {
    variants: {
      align: {
        start: "carousel-start",
        center: "carousel-center",
        end: "carousel-end",
      },
      direction: {
        horizontal: "carousel-horizontal",
        vertical: "carousel-vertical",
      },
    },
    defaultVariants: {
      align: "center",
      direction: "horizontal",
    },
  },
);
