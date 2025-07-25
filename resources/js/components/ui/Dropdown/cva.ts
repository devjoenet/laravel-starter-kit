import { cva } from "class-variance-authority";

export const dropdownVariants = cva("dropdown", {
  variants: {
    placement: {
      start: "dropdown-start",
      center: "dropdown-center",
      end: "dropdown-end",
      top: "dropdown-top",
      bottom: "dropdown-bottom",
      left: "dropdown-left",
      right: "dropdown-right",
    },
    trigger: {
      click: "",
      hover: "dropdown-hover",
      open: "dropdown-open",
    },
  },
  defaultVariants: {
    placement: "bottom",
    trigger: "click",
  },
});
