export type ProgressColor = "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

export interface ProgressProps {
  color?: ProgressColor;
  value: number;
  max?: number;
}
