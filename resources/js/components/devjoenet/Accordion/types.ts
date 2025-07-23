import type { InjectionKey, Ref } from "vue";

export type AccordionStyle = "arrow" | "plus";

export interface AccordionProps {
  name?: string;
  style?: AccordionStyle;
}

export interface AccordionItemProps {
  title: string;
  defaultOpen?: boolean;
}

// Key for provide/inject
export const AccordionContextKey: InjectionKey<{
  name: Ref<string>;
  style: Ref<AccordionStyle | undefined>;
}> = Symbol("AccordionContext");
