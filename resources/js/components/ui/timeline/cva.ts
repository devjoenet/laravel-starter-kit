import { cva } from "class-variance-authority";

export const timelineVariants = cva("timeline", {
  variants: {
    direction: { vertical: "", horizontal: "timeline-horizontal" },
    snapIcon: { true: "timeline-snap-icon", false: "" },
    box: { true: "timeline-box", false: "" },
    compact: { true: "timeline-compact", false: "" },
  },
  defaultVariants: { direction: "vertical", snapIcon: false, box: false, compact: false },
});
