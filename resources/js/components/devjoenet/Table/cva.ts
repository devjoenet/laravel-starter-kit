import { cva } from "class-variance-authority";

export const tableVariants = cva("table", {
  variants: {
    zebra: { true: "table-zebra", false: "" },
    pinRows: { true: "table-pin-rows", false: "" },
    pinCols: { true: "table-pin-cols", false: "" },
    size: {
      xs: "table-xs",
      sm: "table-sm",
      md: "table-md",
      lg: "table-lg",
      xl: "table-xl",
    },
  },
  defaultVariants: {
    zebra: false,
    pinRows: false,
    pinCols: false,
    size: "md",
  },
});
