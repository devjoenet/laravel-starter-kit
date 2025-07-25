import { cva, type VariantProps } from "class-variance-authority";

export const avatarVariants = cva("avatar", {
  variants: {
    shape: {
      circle: "mask-circle",
      squircle: "mask-squircle",
      hexagon: "mask-hexagon",
      triangle: "mask-triangle",
      square: "mask-square",
    },
    status: {
      online: "avatar-online",
      offline: "avatar-offline",
      placeholder: "avatar-placeholder",
    },
  },
  defaultVariants: {
    shape: "circle",
    status: undefined,
  },
});

export type AvatarVariantProps = VariantProps<typeof avatarVariants>;
