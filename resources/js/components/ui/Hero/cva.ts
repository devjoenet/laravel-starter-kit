import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const heroVariants = cva("hero min-h-[60vh]", {
  variants: {
    color: {
      neutral: "bg-neutral text-neutral-content",
      primary: "bg-primary text-primary-content",
      secondary: "bg-secondary text-secondary-content",
      accent: "bg-accent text-accent-content",
      base: "bg-base-200 text-base-content",
    },
  },
  defaultVariants: {
    color: "base",
  },
});

export interface HeroVariantProps extends VariantProps<typeof heroVariants> {
  title: string;
  subtitle?: string;
  class?: string;
}
