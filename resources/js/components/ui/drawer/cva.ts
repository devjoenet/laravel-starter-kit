import { cva, VariantProps } from "class-variance-authority";

export const drawerVariants = cva("drawer", {
  variants: {
    side: {
      start: "",
      end: "drawer-end",
    },
    open: {
      true: "drawer-open",
      false: "",
    },
    responsive: {
      none: "",
      lg: "lg:drawer-open",
    },
  },
  defaultVariants: {
    side: "start",
    open: false,
    responsive: "none",
  },
});

export type DrawerVariantProps = VariantProps<typeof drawerVariants>;
