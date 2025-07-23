export type TooltipPlacement = "top" | "bottom" | "left" | "right";
export type TooltipColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

export interface TooltipProps {
  tip: string;
  placement?: TooltipPlacement;
  color?: TooltipColor;
  open?: boolean;
}
