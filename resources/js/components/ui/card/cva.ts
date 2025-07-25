import { cva, VariantProps } from "class-variance-authority";

export const cardVariants = cva(["card", "overflow-hidden"], {
  variants: {
    variant: {
      base: "bg-base-100 text-base-content",
      primary: "bg-primary text-primary-content",
      secondary: "bg-secondary text-secondary-content",
      info: "bg-info text-info-content",
      success: "bg-success text-success-content",
      warning: "bg-warning text-warning-content",
      error: "bg-error text-error-content",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
    style: {
      none: "",
      bordered: "card-border",
      dash: "card-dash",
    },
    side: {
      vertical: "",
      horizontal: "card-side",
    },
    imageFull: {
      true: "image-full",
      false: "",
    },
    size: {
      xs: "card-xs",
      sm: "card-sm",
      md: "card-md",
      lg: "card-lg",
      xl: "card-xl",
    },
  },
  defaultVariants: {
    variant: "base",
    shadow: "none",
    style: "none",
    side: "vertical",
    imageFull: false,
    size: "md",
  },
});

export type CardVariantProps = VariantProps<typeof cardVariants>;
