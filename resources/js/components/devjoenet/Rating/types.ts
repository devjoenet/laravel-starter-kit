export type RatingSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface RatingProps {
  /**
   * The total number of rating items to display.
   */
  maxRating?: number;
  /**
   * The name for the radio button group. A unique name is generated if not provided.
   */
  name?: string;
  size?: RatingSize;
  /**
   * Allows for half-item ratings.
   */
  half?: boolean;
  /**
   * Allows the user to clear their rating.
   */
  clearable?: boolean;
  /**
   * The Daisy UI mask class to use for the rating items.
   */
  mask?: string;
}
