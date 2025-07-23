export type CardStyle = "border" | "dash";
export type CardLayout = "side" | "image-full";
export type CardSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface CardProps {
  cardStyle?: CardStyle;
  layout?: CardLayout;
  size?: CardSize;
}

export interface CardImageProps {
  src: string;
  alt?: string;
}

export interface CardTitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}
