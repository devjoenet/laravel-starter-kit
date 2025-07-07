import { cva } from "class-variance-authority";

export const inputVariants = cva(
  // Base classes for the input element
  [
    "peer block h-14 w-full text-base text-on-surface outline-none transition-colors duration-200 ease-in-out",
    "hover:border-on-surface",
    "disabled:pointer-events-none disabled:border-on-surface/12 disabled:text-on-surface/38",
    "focus:border-2 focus:border-primary",
    "aria-[invalid=true]:border-2 aria-[invalid=true]:border-error",
    "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
  ],
  {
    variants: {
      variant: {
        filled: [
          "rounded-t-lg border-b border-outline bg-surface-container-highest px-4 pb-2 pt-6",
          "focus:pt-[23px]",
          "disabled:bg-on-surface/4",
          "aria-[invalid=true]:pt-[23px]",
        ],
        outlined: [
          "rounded-lg border border-outline bg-transparent px-4 py-4",
          "focus:py-[15px]",
          "aria-[invalid=true]:py-[15px]",
        ],
      },
    },
    defaultVariants: {
      variant: "outlined",
    },
  },
);

export const labelVariants = cva(
  // Base classes for the label element
  [
    "pointer-events-none absolute left-4 origin-top-left text-base text-on-surface-variant transition-all duration-200 ease-in-out",
    "group-focus-within:scale-75 group-focus-within:text-primary",
    "peer-[:not(:placeholder-shown)]:scale-75",
    "peer-disabled:text-on-surface/38",
    "peer-aria-[invalid=true]:text-error",
  ],
  {
    variants: {
      variant: {
        filled: [
          "top-4",
          "group-focus-within:top-2 group-focus-within:-translate-y-1",
          "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:-translate-y-1",
        ],
        outlined: [
          "top-1/2 -translate-y-1/2",
          "group-focus-within:top-0 group-focus-within:bg-background group-focus-within:px-1",
          "peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-1",
        ],
      },
    },
    defaultVariants: {
      variant: "outlined",
    },
  },
);
