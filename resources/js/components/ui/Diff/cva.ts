import { cva } from "class-variance-authority";

export const diffVariants = cva("diff", {
  variants: {
    aspect: { none: "", "16/9": "aspect-video", "1/1": "aspect-square" },
  },
  defaultVariants: { aspect: "none" },
});
