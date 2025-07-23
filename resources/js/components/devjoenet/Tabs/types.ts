export type TabStyle = "box" | "border" | "lift";
export type TabPlacement = "top" | "bottom";

export interface TabsProps {
  tabStyle?: TabStyle;
  placement?: TabPlacement;
  /**
   * Required for radio-button controlled tabs. All tabs in a group share this name.
   */
  name?: string;
}

export interface TabProps {
  /**
   * Set to 'radio' to render a radio-input based tab.
   */
  as?: "button" | "radio";
  active?: boolean;
  disabled?: boolean;
  /**
   * The text label for the tab, required when using `as: 'radio'`.
   */
  label?: string;
}
