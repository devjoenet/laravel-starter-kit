export type IndicatorHorizontal = "start" | "center" | "end";
export type IndicatorVertical = "top" | "middle" | "bottom";

export interface IndicatorItemProps {
  horizontal?: IndicatorHorizontal;
  vertical?: IndicatorVertical;
}
