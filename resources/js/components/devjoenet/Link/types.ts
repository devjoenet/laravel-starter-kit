import type { Link as InertiaLink } from "@inertiajs/vue3";

export type LinkStyle = "hover";
export type LinkColor = "neutral" | "primary" | "secondary" | "accent" | "success" | "info" | "warning" | "error";

export interface LinkProps {
  as?: "a" | typeof InertiaLink;
  linkStyle?: LinkStyle;
  color?: LinkColor;
}
