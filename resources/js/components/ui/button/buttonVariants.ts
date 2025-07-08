import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  // --- Base classes applied to all buttons ---
  // Specs: 40dp height, fully rounded, prominent text.
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none",
  {
    variants: {
      // --- Defines the look and feel of the button ---
      variant: {
        // High-emphasis, solid background
        filled:
          "bg-primary text-on-primary shadow-sm " + // Resting state with slight elevation
          "hover:shadow-md " + // Hover: Elevation lifts to Level 1
          "active:shadow-none " + // Active (Pressed): Elevation returns to Level 0
          "hover:brightness-95 active:brightness-90 " + // Simulates state layer overlays
          "disabled:bg-on-surface/12 disabled:text-on-surface/38 focus-visible:ring-primary/30",

        // Medium-emphasis, transparent with a border
        outlined:
          "border border-outline text-primary " +
          "hover:bg-primary/10 " + // Hover: 8% state layer
          "active:bg-primary/20 " + // Active (Pressed): 12% state layer
          "focus-visible:ring-primary/30 disabled:border-on-surface/12 disabled:text-on-surface/38",

        // Low-emphasis, just text
        text:
          "text-primary " +
          "hover:bg-primary/10 " + // Hover: 8% state layer
          "active:bg-primary/20 " + // Active (Pressed): 12% state layer
          "focus-visible:ring-primary/30 disabled:text-on-surface/38",

        // A destructive action variant, styled like a filled button
        destructive:
          "bg-error text-on-error shadow-sm " +
          "hover:shadow-md " +
          "active:shadow-none " +
          "hover:brightness-95 active:brightness-90 " +
          "disabled:bg-on-surface/12 disabled:text-on-surface/38 focus-visible:ring-error/30",
      },
      // --- Defines the size of the button ---
      size: {
        default: "h-10 px-6", // 40dp height, 24dp padding
        sm: "h-9 px-4",
        lg: "h-11 px-8",
      },
    },
    // --- Default values if no props are provided ---
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
