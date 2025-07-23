export type FileInputVariant = "outlined" | "filled";

export type FileInputColor = "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

export type FileInputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface FileInputProps {
  variant?: FileInputVariant;
  color?: FileInputColor;
  size?: FileInputSize;
}
