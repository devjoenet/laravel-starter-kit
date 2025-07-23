export interface ListItemProps {
  /**
   * Applies `list-col-wrap` to the specified child index (1-based) to force wrapping.
   */
  wrapCol?: number;
  /**
   * Applies `list-col-grow` to the specified child index (1-based) to make it fill remaining space.
   */
  growCol?: number;
}
