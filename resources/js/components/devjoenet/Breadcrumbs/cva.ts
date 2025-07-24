import { cva } from "class-variance-authority";

export const breadcrumbsVariants = cva("breadcrumbs", {
  variants: {
    separator: {
      slash: "",
      arrow: "separator separator-arrow",
      dot: "separator separator-dot",
    },
  },
  defaultVariants: {
    separator: "slash",
  },
});
