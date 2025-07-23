export type DockSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface DockProps {
  size?: DockSize;
}

export interface DockItemProps {
  active?: boolean;
}
