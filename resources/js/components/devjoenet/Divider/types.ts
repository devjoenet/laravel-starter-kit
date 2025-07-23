export type DividerDirection = "vertical" | "horizontal";

export type DividerColor = "neutral" | "primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error";

export type DividerPlacement = "start" | "end";

export interface DividerProps {
  direction?: DividerDirection;
  color?: DividerColor;
  placement?: DividerPlacement;
}
