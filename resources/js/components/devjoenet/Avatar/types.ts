export type AvatarStatus = "online" | "offline";

export type AvatarMask =
  | "squircle"
  | "heart"
  | "hexagon"
  | "hexagon-2"
  | "decagon"
  | "pentagon"
  | "diamond"
  | "square"
  | "circle"
  | "star"
  | "star-2"
  | "triangle"
  | "triangle-2"
  | "triangle-3"
  | "triangle-4";

export interface AvatarProps {
  src?: string;
  alt?: string;
  placeholder?: string;
  status?: AvatarStatus;
  sizeClass?: string;
  mask?: AvatarMask;
  ringClass?: string;
}

export interface AvatarGroupProps {
  spaceClass?: string;
}
