export type CarouselAlign = "start" | "center" | "end";
export type CarouselDirection = "horizontal" | "vertical";

export interface CarouselProps {
  align?: CarouselAlign;
  direction?: CarouselDirection;
}

export interface CarouselItemProps {
  fullWidth?: boolean;
}
