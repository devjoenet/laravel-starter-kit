export type TableSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface TableProps {
  size?: TableSize;
  zebra?: boolean;
  pinRows?: boolean;
  pinCols?: boolean;
}
