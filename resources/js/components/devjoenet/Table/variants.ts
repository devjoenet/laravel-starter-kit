import { cva } from "class-variance-authority";

export const tableVariants = cva(
  "table", // Base class
  {
    variants: {
      size: {
        xs: "table-xs",
        sm: "table-sm",
        md: "table-md",
        lg: "table-lg",
        xl: "table-xl",
      },
      zebra: {
        true: "table-zebra",
      },
      pinRows: {
        true: "table-pin-rows",
      },
      pinCols: {
        true: "table-pin-cols",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
