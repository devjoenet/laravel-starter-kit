import { cva, type VariantProps } from "class-variance-authority";

export const skeletonBase = cva("skeleton", {
  variants: {
    shape: {
      square: "h-32 w-32",
      circle: "h-32 w-32 rounded-full",
      contentBlock: "h-4 w-full",
    },
  },
  defaultVariants: { shape: "square" },
});

export type SkeletonBaseVariants = VariantProps<typeof skeletonBase>;
export type SkeletonVariant = "square" | "circle" | "circleWithContent" | "rectangleWithContent";
