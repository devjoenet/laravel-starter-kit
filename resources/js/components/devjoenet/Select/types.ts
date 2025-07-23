import type { InjectionKey, Ref } from "vue";

export type SelectVariant = "outlined" | "filled";

export type SelectColor = "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

export type SelectSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface SelectProps {
  variant?: SelectVariant;
  color?: SelectColor;
  size?: SelectSize;
  placeholder?: string;
}

export interface SelectOptionProps {
  value: any;
  disabled?: boolean;
}

// Key for provide/inject
export const SelectContextKey: InjectionKey<{
  modelValue: Ref<any>;
  onSelect: (value: any, label: string) => void;
}> = Symbol("SelectContext");
