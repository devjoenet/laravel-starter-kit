export type CheckboxColor = "primary" | "secondary" | "accent" | "neutral" | "success" | "warning" | "info" | "error";

export type CheckboxSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface CheckboxProps {
  color?: CheckboxColor;
  size?: CheckboxSize;
  indeterminate?: boolean;
}
