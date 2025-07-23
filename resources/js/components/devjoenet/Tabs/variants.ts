import { cva } from "class-variance-authority";

export const tabsVariants = cva("tabs", {
  variants: {
    tabStyle: {
      box: "tabs-box",
      border: "tabs-border",
      lift: "tabs-lift",
    },
    placement: {
      top: "tabs-top",
      bottom: "tabs-bottom",
    },
  },
});
