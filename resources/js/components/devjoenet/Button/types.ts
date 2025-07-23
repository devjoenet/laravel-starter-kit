import { DefineComponent, type Component } from "vue";
import { InertiaLinkProps } from "@inertiajs/vue3";

export type InertiaLink = DefineComponent<InertiaLinkProps>;

export type ButtonColor = "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

export type ButtonStyle = "outline" | "dash" | "soft" | "ghost" | "link";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonShape = "wide" | "block" | "square" | "circle";

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  as?: "a" | "button" | Component | InertiaLink;
  type?: ButtonType;
  color?: ButtonColor;
  btnStyle?: ButtonStyle;
  size?: ButtonSize;
  shape?: ButtonShape;
  active?: boolean;
  disabled?: boolean;
}
