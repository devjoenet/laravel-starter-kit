import { PrimitiveProps } from "reka-ui";
import { HTMLAttributes } from "vue";
import { ButtonVariants } from "./variants";

export { default as Button } from "./Button.vue";
export { variants, type ButtonVariants } from "./variants";

export interface ButtonProps extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}
