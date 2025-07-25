import { cva, type VariantProps } from "class-variance-authority";

export const alertVariants = cva("alert", {
  variants: {
    severity: {
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    },
    variant: {
      filled: "",
      outlined: "alert-outline",
      soft: "alert-soft",
    },
  },
  defaultVariants: { severity: "info", variant: "filled" },
});

export type AlertVariantProps = VariantProps<typeof alertVariants>;
