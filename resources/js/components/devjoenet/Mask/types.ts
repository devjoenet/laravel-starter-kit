export type MaskShape =
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

export interface MaskProps {
  shape: MaskShape;
  half1?: boolean;
  half2?: boolean;
}
