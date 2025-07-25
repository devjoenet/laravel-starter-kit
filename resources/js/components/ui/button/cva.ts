import { cva } from "class-variance-authority";

export const buttonVariants = cva("btn relative overflow-hidden select-none transition-shadow transition-colors duration-200 motion-safe:active:scale-97", {
  variants: {
    variant: {
      filled: "btn-primary shadow-md",
      elevated: "btn-primary shadow-lg bg-primary/90",
      outlined: "btn-outline border-2 border-primary text-primary bg-transparent hover:bg-primary/10",
      tonal: "bg-secondary text-secondary-content shadow-md hover:bg-secondary/90",
      text: "bg-transparent text-primary hover:bg-primary/10 shadow-none",
      icon: "btn-square btn-primary p-2 text-lg shadow",
      fab: "btn-circle btn-primary shadow-xl fixed bottom-6 right-6 z-40",
    },
    size: {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
    loading: {
      true: "loading pointer-events-none opacity-70",
      false: "",
    },
    disabled: {
      true: "btn-disabled pointer-events-none opacity-50",
      false: "",
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "md",
  },
});
