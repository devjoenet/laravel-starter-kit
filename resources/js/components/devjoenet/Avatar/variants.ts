import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  "avatar", // Base class
  {
    variants: {
      isPlaceholder: {
        true: "avatar-placeholder",
      },
      status: {
        online: "avatar-online",
        offline: "avatar-offline",
      },
    },
  },
);
