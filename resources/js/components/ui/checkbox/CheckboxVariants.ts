import { cva, type VariantProps } from "class-variance-authority";

export const checkboxVariants = cva([
  // --- Base classes ---
  "peer flex size-5 shrink-0 items-center justify-center rounded border transition-colors",
  // --- Resting state ---
  "border-outline",
  // --- Checked/Indeterminate state ---
  "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground",
  "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:text-primary-foreground",
  // --- Focus state (M3 style halo) ---
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20",
  // --- Disabled state ---
  "disabled:cursor-not-allowed disabled:border-on-surface/12 disabled:bg-on-surface/12",
  "disabled:data-[state=checked]:bg-on-surface/12 disabled:data-[state=checked]:text-on-surface/38",
  // --- Invalid state ---
  "aria-[invalid=true]:border-error",
]);

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
