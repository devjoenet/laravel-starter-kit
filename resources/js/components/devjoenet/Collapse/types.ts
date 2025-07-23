export type CollapseStyle = "arrow" | "plus";
export type CollapseControl = "focus" | "checkbox" | "details";

export interface CollapseProps {
  collapseStyle?: CollapseStyle;
  control?: CollapseControl;
  isOpen?: boolean;
  title?: string;
}
