import { type VariantProps, cva } from "class-variance-authority";

export const alertVariants = cva("relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7", {
  variants: {
    variant: {
      info: "bg-surface-container-high border-outline text-on-surface",
      success: "border-green-300 text-green-700 [&>svg]:text-green-700",
      warning: "border-yellow-300 text-yellow-700 [&>svg]:text-yellow-700",
      error: "border-red-300 text-red-700 [&>svg]:text-red-700",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export type AlertVariants = VariantProps<typeof alertVariants>;
