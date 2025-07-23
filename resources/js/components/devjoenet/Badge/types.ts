export type BadgeStyle = "outline" | "dash" | "soft" | "ghost";

export type BadgeColor = "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

export type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface BadgeProps {
  badgeStyle?: BadgeStyle;
  color?: BadgeColor;
  size?: BadgeSize;
}
