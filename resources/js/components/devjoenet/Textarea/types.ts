export type TextareaVariant = "outlined" | "filled";

export type TextareaColor = "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

export type TextareaSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface TextareaProps {
  variant?: TextareaVariant;
  color?: TextareaColor;
  size?: TextareaSize;
}
