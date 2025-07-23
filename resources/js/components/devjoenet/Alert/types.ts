export type AlertStyle = "outline" | "dash" | "soft";
export type AlertColor = "info" | "success" | "warning" | "error";
export type AlertDirection = "vertical" | "horizontal";

export interface AlertProps {
  alertStyle?: AlertStyle;
  color?: AlertColor;
  direction?: AlertDirection;
}
