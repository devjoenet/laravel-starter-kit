export type LoadingStyle = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
export type LoadingSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface LoadingProps {
  loadingStyle?: LoadingStyle;
  size?: LoadingSize;
}
