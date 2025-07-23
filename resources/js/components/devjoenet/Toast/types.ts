export type ToastHorizontal = "start" | "center" | "end";
export type ToastVertical = "top" | "middle" | "bottom";

export interface ToastProps {
  horizontal?: ToastHorizontal;
  vertical?: ToastVertical;
}
