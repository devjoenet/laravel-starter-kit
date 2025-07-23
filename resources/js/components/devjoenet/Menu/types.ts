export type MenuDirection = "vertical" | "horizontal";
export type MenuSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface MenuProps {
  direction?: MenuDirection;
  size?: MenuSize;
}

export interface MenuItemProps {
  disabled?: boolean;
  active?: boolean;
  focused?: boolean;
}
