// Import both the data and its type from the same file
import { accordionItems, type AccordionItemData } from "./sampleAccordionData";

/**
 * This file explicitly imports all sample data files and combines
 * them into a single, fully-typed `componentData` object.
 *
 * When adding data for a new component, you will need to:
 * 1. Import the data array and its type (e.g., `import { buttonExamples, type ButtonExampleData } from './sampleButtonData'`).
 * 2. Add the type to the `ComponentData` interface.
 * 3. Add the data to the `componentData` object.
 */

// Define the shape of our final data object
interface ComponentData {
  accordionItems: AccordionItemData[];
  // Add other data types here as you create them
}

// Create and export the fully-typed object
export const componentData: ComponentData = {
  accordionItems,
};
