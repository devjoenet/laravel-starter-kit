import { cva } from "class-variance-authority";

export const pinVariants = cva("input no-spinner text-center", {
  variants: {
    length: {
      4: "w-12",
      6: "w-18",
      8: "w-24",
    },
    autoFocus: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    length: 4,
    autoFocus: true,
  },
});
