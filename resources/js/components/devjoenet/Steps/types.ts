export type StepsDirection = "vertical" | "horizontal";

export type StepColor = "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

export interface StepsProps {
  direction?: StepsDirection;
}

export interface StepItemProps {
  color?: StepColor;
  /**
   * The value to display inside the step (e.g., '1', '✓').
   */
  dataContent?: string;
}
