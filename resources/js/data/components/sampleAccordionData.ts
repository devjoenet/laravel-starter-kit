export interface AccordionItemData {
  value: string;
  title: string;
  content: string;
}

export const accordionItems: AccordionItemData[] = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    title: "Is it styled?",
    content: "Yes. It comes with default styles that match the Material 3 design system. You can easily override them.",
  },
  {
    value: "item-3",
    title: "Is it animated?",
    content: "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];
