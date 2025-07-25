import { cva, type VariantProps } from "class-variance-authority";

export const variants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        filled:
          "bg-primary text-on-primary shadow-sm " + // Resting state with slight elevation
          "hover:shadow-md " + // Hover: Elevation lifts to Level 1
          "active:shadow-none " + // Active (Pressed): Elevation returns to Level 0
          "hover:brightness-95 active:brightness-90 " + // Simulates state layer overlays
          "disabled:bg-on-surface/12 disabled:text-on-surface/38 focus-visible:ring-primary/30",

        outlined:
          "border border-outline text-primary " +
          "hover:bg-primary/10 " + // Hover: 8% state layer
          "active:bg-primary/20 " + // Active (Pressed): 12% state layer
          "focus-visible:ring-primary/30 disabled:border-on-surface/12 disabled:text-on-surface/38",

        text:
          "text-primary " +
          "hover:bg-primary/10 " + // Hover: 8% state layer
          "active:bg-primary/20 " + // Active (Pressed): 12% state layer
          "focus-visible:ring-primary/30 disabled:text-on-surface/38",

        destructive:
          "bg-error text-on-error shadow-sm " +
          "hover:shadow-md " +
          "active:shadow-none " +
          "hover:brightness-95 active:brightness-90 " +
          "disabled:bg-on-surface/12 disabled:text-on-surface/38 focus-visible:ring-error/30",
      },

      size: {
        default: "h-10 px-6", // 40dp height, 24dp padding
        sm: "h-9 px-4",
        lg: "h-11 px-8",
      },
    },

    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  },
);

export type ButtonVariants = VariantProps<typeof variants>;
