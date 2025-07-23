export type TimelineDirection = "vertical" | "horizontal";
export type TimelineStyle = "snap-icon" | "box" | "compact";

export interface TimelineProps {
  direction?: TimelineDirection;
  timelineStyle?: TimelineStyle;
}
