import { cva } from "class-variance-authority";

export const timelineVariants = cva(
  "timeline", // Base class
  {
    variants: {
      direction: {
        vertical: "timeline-vertical",
        horizontal: "timeline-horizontal",
      },
      timelineStyle: {
        "snap-icon": "timeline-snap-icon",
        box: "timeline-box",
        compact: "timeline-compact",
      },
    },
    defaultVariants: {
      direction: "vertical",
    },
  },
);
