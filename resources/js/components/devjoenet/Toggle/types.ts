export type ToggleColor = "primary" | "secondary" | "accent" | "neutral" | "success" | "warning" | "info" | "error";

export type ToggleSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ToggleProps {
  color?: ToggleColor;
  size?: ToggleSize;
}
