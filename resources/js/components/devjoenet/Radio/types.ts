import type { InjectionKey, Ref } from "vue";

export type RadioColor = "primary" | "secondary" | "accent" | "neutral" | "success" | "warning" | "info" | "error";

export type RadioSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface RadioGroupProps {
  name?: string;
}

export interface RadioProps {
  value: string | number;
  color?: RadioColor;
  size?: RadioSize;
}

// Key for provide/inject
export const RadioGroupContextKey: InjectionKey<{
  name: Ref<string>;
  modelValue: Ref<string | number | undefined>;
}> = Symbol("RadioGroupContext");
