export type ChatPlacement = "start" | "end";

export type ChatBubbleColor = "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

export interface ChatBubbleProps {
  placement?: ChatPlacement;
  color?: ChatBubbleColor;
}

export interface ChatImageProps {
  src: string;
  alt?: string;
}
