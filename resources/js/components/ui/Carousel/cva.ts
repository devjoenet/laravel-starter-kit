import { cva } from "class-variance-authority";

export const carouselVariants = cva("carousel", {
  variants: {
    start: { true: "carousel-start", false: "" },
    center: { true: "carousel-center", false: "" },
    end: { true: "carousel-end", false: "" },
    horizontal: { true: "carousel-horizontal", false: "" },
    vertical: { true: "carousel-vertical", false: "" },
  },
  defaultVariants: { start: false, center: false, end: false, horizontal: false, vertical: false },
});
