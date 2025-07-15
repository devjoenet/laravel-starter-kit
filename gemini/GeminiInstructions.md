# **PART 1 \- Steps for refactoring a Vue 3 component to fit our project's standards.** 

### Decomposition: 

* Analyze the component. If it contains distinct parts that could be reused or simplified, extract them into their own .vue files (e.g., extracting an icon into a dedicated component).

### Styling & MD3 Alignment:

* Go through the component and its new sub-components.  
* Update all Tailwind CSS classes to align with the Material Design 3 spec, using the custom theme variables defined in app.css (e.g., border-border becomes border-outline).

### Props Handling:

* In each component that passes props down to a child (especially a reka-ui component), replace any manual prop delegation with the reactiveOmit function from @vueuse/core to cleanly exclude the class attribute.

### File Organization:

* Ensure the component and all its sub-components are located in a dedicated directory at /components/ui/\[component-name\]/.  
* Create or update the index.ts barrel file in that directory to export all the necessary parts for easy importing.

### Showcase & Data:

* Create a new sample data file at /resources/js/data/components/sample\[ComponentName\]Data.ts.  
* Inside this new file, define and export both a TypeScript interface for the data's shape and the const array of sample data itself.  
* Update /resources/js/data/components/index.ts to explicitly import the new data and type, adding them to the main componentData export.  
* Finally, update the /resources/js/pages/Components.vue page to import and use the new data, adding a new section to display a working example of the component.

# 

# **PART 2 \- Implementing Material Design 3 Expressive: A Strategic Guide for Refactoring a Laravel and Vue.js Application**

## **Introduction**

This report provides a comprehensive technical guide for refactoring a modern web application built on Laravel, Vue.js, Inertia.js, and Tailwind CSS to fully align with Google's Material Design 3 (M3) Expressive design standards. The analysis and recommendations are based on an evaluation of the provided project structure, which includes a shadcn/ui-inspired component library (reka-ui). The primary objective is to transform the existing front-end into a visually expressive, emotionally resonant, and highly usable interface while leveraging the strengths of the current technology stack.  
The M3 Expressive style represents a significant evolution from previous design systems, emphasizing personalization, dynamic color, fluid motion, and a more varied use of shape to create user interfaces that are not just functional but also engaging and intuitive. This guide will deconstruct these abstract principles into concrete, actionable steps, providing a clear roadmap for developers. The process involves establishing a robust design token system within Tailwind CSS, refactoring the existing component library, building new M3-native components, and integrating these elements across the application. The final result will be a product that is not only aesthetically compliant with M3 Expressive but is also more maintainable, accessible, and prepared for future design evolution.

## **Part 1: Establishing the M3 Expressive Foundation in Tailwind CSS**

The success of this refactoring effort hinges on establishing a solid and systematic foundation. This initial phase involves translating the core principles of Material Design 3—color, typography, and shape—into a comprehensive system of design tokens within the project's existing Tailwind CSS configuration. By codifying these design decisions into reusable variables and utility classes, a consistent and maintainable M3-compliant theme can be applied across the entire application, dramatically accelerating the subsequent component-level refactoring.

### **1.1 Deconstructing M3 Color Theory for Tailwind**

The objective is to create a complete M3-compliant color system using CSS variables within resources/css/app.css. This system will be consumed by Tailwind CSS to generate semantic utility classes, support both light and dark themes, and be based on M3's specific color role architecture.

#### **M3 Color System Principles**

The Material Design 3 color system is a sophisticated framework designed for flexibility, personalization, and accessibility. It is not merely a palette of static colors but an algorithmic system that generates harmonious and accessible color schemes from a single source color.  
The system is built on five key colors: Primary, Secondary, Tertiary, Neutral, and Neutral Variant. From these key colors, a series of tonal palettes are generated. Each palette consists of multiple "tones" of a color, ranging from a value of 0 (darkest) to 100 (lightest).  
The true power of the system lies in its use of **color roles**. These are semantic names assigned to specific tones from the palettes, which are then applied to UI components. There are over 26 standard roles, such as primary, on-primary (for text/icons on a primary background), surface, surface-container, outline, and error. This role-based approach ensures that when a theme changes (e.g., from light to dark, or when a user's wallpaper changes via dynamic color), the UI updates consistently and maintains accessible contrast ratios.  
The project's existing app.css file already utilizes CSS variables for theming, such as \--color-background and \--color-primary. This provides an excellent foundation to expand upon. The strategy will be to define a complete set of M3 color role variables and map them to Tailwind's theme.

#### **Actionable Implementation Steps**

1. **Generate the Core Palette:** The first step is to generate the full set of tonal palettes. The official **Material Theme Builder** is the recommended tool for this process. For this guide, a demonstration palette will be generated using the M3 baseline primary color of \#6750A4. This tool will output the specific color values for all key colors and their corresponding tones, for both light and dark themes.  
2. **Define Color Roles as CSS Variables:** The generated palette values will be translated into CSS custom properties in resources/css/app.css. A variable will be created for each of the M3 color roles. The light theme values will be defined under the :root selector, and these will be overridden for the dark theme within a .dark class selector. This aligns with the project's existing dark mode implementation.  
3. **Integrate with Tailwind CSS:** With Tailwind CSS 4, variables defined in a @theme block are automatically converted into utility classes. This creates a direct, semantic bridge between the M3 color roles and the classes used in the Vue components. For instance, the \--color-primary variable will generate utilities like bg-primary, text-primary, and border-primary.

An example of the CSS structure in resources/css/app.css would be:  
`@import "tailwindcss";`

`/*... other imports... */`

`@layer base {`  
  `:root {`  
    `/* M3 Light Theme Color Roles (generated from #6750A4) */`  
    `--m3-primary: #6750A4;`  
    `--m3-on-primary: #FFFFFF;`  
    `--m3-primary-container: #EADDFF;`  
    `--m3-on-primary-container: #21005D;`  
    `--m3-secondary: #625B71;`  
    `--m3-on-secondary: #FFFFFF;`  
    `--m3-secondary-container: #E8DEF8;`  
    `--m3-on-secondary-container: #1D192B;`  
    `--m3-tertiary: #7D5260;`  
    `--m3-on-tertiary: #FFFFFF;`  
    `--m3-tertiary-container: #FFD8E4;`  
    `--m3-on-tertiary-container: #31111D;`  
    `--m3-error: #B3261E;`  
    `--m3-on-error: #FFFFFF;`  
    `--m3-error-container: #F9DEDC;`  
    `--m3-on-error-container: #410E0B;`  
    `--m3-background: #FFFBFE;`  
    `--m3-on-background: #1C1B1F;`  
    `--m3-surface: #FFFBFE;`  
    `--m3-on-surface: #1C1B1F;`  
    `--m3-surface-variant: #E7E0EC;`  
    `--m3-on-surface-variant: #49454F;`  
    `--m3-outline: #79747E;`  
    `--m3-outline-variant: #C4C6C9;`  
    `--m3-shadow: #000000;`  
    `--m3-scrim: #000000;`  
    `--m3-inverse-surface: #313033;`  
    `--m3-inverse-on-surface: #F4EFF4;`  
    `--m3-inverse-primary: #D0BCFF;`  
    `--m3-surface-dim: #DED8E1;`  
    `--m3-surface-bright: #FFFBFE;`  
    `--m3-surface-container-lowest: #FFFFFF;`  
    `--m3-surface-container-low: #F7F2FA;`  
    `--m3-surface-container: #F3EDF7;`  
    `--m3-surface-container-high: #ECE6F0;`  
    `--m3-surface-container-highest: #E6E0E9;`  
  `}`

 `.dark {`  
    `/* M3 Dark Theme Color Roles (generated from #6750A4) */`  
    `--m3-primary: #D0BCFF;`  
    `--m3-on-primary: #381E72;`  
    `--m3-primary-container: #4F378B;`  
    `--m3-on-primary-container: #EADDFF;`  
    `--m3-secondary: #CCC2DC;`  
    `--m3-on-secondary: #332D41;`  
    `--m3-secondary-container: #4A4458;`  
    `--m3-on-secondary-container: #E8DEF8;`  
    `--m3-tertiary: #EFB8C8;`  
    `--m3-on-tertiary: #492532;`  
    `--m3-tertiary-container: #633B48;`  
    `--m3-on-tertiary-container: #FFD8E4;`  
    `--m3-error: #F2B8B5;`  
    `--m3-on-error: #601410;`  
    `--m3-error-container: #8C1D18;`  
    `--m3-on-error-container: #F9DEDC;`  
    `--m3-background: #1C1B1F;`  
    `--m3-on-background: #E6E1E5;`  
    `--m3-surface: #1C1B1F;`  
    `--m3-on-surface: #E6E1E5;`  
    `--m3-surface-variant: #49454F;`  
    `--m3-on-surface-variant: #CAC4D0;`  
    `--m3-outline: #938F99;`  
    `--m3-outline-variant: #444746;`  
    `--m3-shadow: #000000;`  
    `--m3-scrim: #000000;`  
    `--m3-inverse-surface: #E6E1E5;`  
    `--m3-inverse-on-surface: #313033;`  
    `--m3-inverse-primary: #6750A4;`  
    `--m3-surface-dim: #141218;`  
    `--m3-surface-bright: #3B383E;`  
    `--m3-surface-container-lowest: #0F0D13;`  
    `--m3-surface-container-low: #1D1B20;`  
    `--m3-surface-container: #211F26;`  
    `--m3-surface-container-high: #2B2930;`  
    `--m3-surface-container-highest: #36343B;`  
  `}`  
`}`

`@theme {`  
  `--color-primary: var(--m3-primary);`  
  `--color-on-primary: var(--m3-on-primary);`  
  `--color-primary-container: var(--m3-primary-container);`  
  `--color-on-primary-container: var(--m3-on-primary-container);`  
  `--color-secondary: var(--m3-secondary);`  
  `--color-on-secondary: var(--m3-on-secondary);`  
  `--color-secondary-container: var(--m3-secondary-container);`  
  `--color-on-secondary-container: var(--m3-on-secondary-container);`  
  `--color-tertiary: var(--m3-tertiary);`  
  `--color-on-tertiary: var(--m3-on-tertiary);`  
  `--color-tertiary-container: var(--m3-tertiary-container);`  
  `--color-on-tertiary-container: var(--m3-on-tertiary-container);`  
  `--color-error: var(--m3-error);`  
  `--color-on-error: var(--m3-on-error);`  
  `--color-error-container: var(--m3-error-container);`  
  `--color-on-error-container: var(--m3-on-error-container);`  
  `--color-background: var(--m3-background);`  
  `--color-on-background: var(--m3-on-background);`  
  `--color-surface: var(--m3-surface);`  
  `--color-on-surface: var(--m3-on-surface);`  
  `--color-surface-variant: var(--m3-surface-variant);`  
  `--color-on-surface-variant: var(--m3-on-surface-variant);`  
  `--color-outline: var(--m3-outline);`  
  `--color-outline-variant: var(--m3-outline-variant);`  
  `--color-shadow: var(--m3-shadow);`  
  `--color-scrim: var(--m3-scrim);`  
  `--color-inverse-surface: var(--m3-inverse-surface);`  
  `--color-inverse-on-surface: var(--m3-inverse-on-surface);`  
  `--color-inverse-primary: var(--m3-inverse-primary);`  
  `--color-surface-dim: var(--m3-surface-dim);`  
  `--color-surface-bright: var(--m3-surface-bright);`  
  `--color-surface-container-lowest: var(--m3-surface-container-lowest);`  
  `--color-surface-container-low: var(--m3-surface-container-low);`  
  `--color-surface-container: var(--m3-surface-container);`  
  `--color-surface-container-high: var(--m3-surface-container-high);`  
  `--color-surface-container-highest: var(--m3-surface-container-highest);`  
`}`

#### **Color System Rationale and Accessibility**

Adopting this role-based system provides a profound advantage beyond simple aesthetics. M3's color system, particularly its use of the HCT (Hue, Chroma, Tone) color space, is engineered for accessibility. The Tone value directly corresponds to a color's luminance, which is the critical factor in determining contrast. The Material Theme Builder's algorithms generate tonal palettes where the relationships between tones are pre-calculated to meet WCAG accessibility standards.  
This means that by consistently using the defined color roles—for example, applying text-on-primary to text that appears on a bg-primary element—the application will achieve accessible color contrast by default. This systematic approach significantly reduces the development overhead of manual contrast checking and minimizes the risk of introducing accessibility issues, ensuring the final product is usable for a wider audience.

### **1.2 Implementing the M3 Typographic Scale**

The objective of this phase is to configure Tailwind CSS to provide a full set of utility classes that precisely match the M3 type scale, and to integrate the official Roboto font family into the project.

#### **M3 Typography Principles**

Material Design 3 defines a comprehensive and flexible type scale designed to ensure readability and clear hierarchy across a wide range of contexts. The scale is organized into five semantic roles: **Display**, **Headline**, **Title**, **Body**, and **Label**. Each of these roles has three distinct sizes: **Large**, **Medium**, and **Small**, resulting in 15 baseline styles.  
The M3 Expressive update further enriches this system by introducing an additional 15 "emphasized" styles. These typically use a heavier font weight or other subtle adjustments to draw attention to key elements, enabling more dynamic and expressive layouts. The default typeface for the entire system is **Roboto**, with **Roboto Flex** recommended for more advanced typographic expression due to its variable font axes.

#### **Actionable Implementation Steps**

1. **Font Integration:** The project already includes the spatie/laravel-google-fonts package , which simplifies the process of self-hosting Google Fonts. This package should be configured to fetch the **Roboto** font family, including its various weights (e.g., 400 for Regular, 500 for Medium). For more advanced expressive capabilities, **Roboto Flex** should also be included.  
2. **Tailwind Theme Configuration:** The core of the implementation lies in extending the tailwind.config.js file to define the M3 type scale. The font sizes provided in the M3 specification, typically in points (pt), will be converted to rem units. This ensures that typography scales correctly with the user's browser settings, a key aspect of web accessibility. The configuration will map each of the 15 M3 styles to a custom Tailwind font size utility, including its specific line height and letter spacing.

The following table provides the direct mapping from the M3 specification to the required Tailwind CSS configuration.

| Role | M3 Font Size (pt) | M3 Line Height (pt) | M3 Weight | Tailwind Class | Tailwind Config (\`\`) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Display Large** | 57 | 64 | 400 | text-display-large | \['3.5625rem', { lineHeight: '4rem', fontWeight: '400' }\] |
| **Display Medium** | 45 | 52 | 400 | text-display-medium | \['2.8125rem', { lineHeight: '3.25rem', fontWeight: '400' }\] |
| **Display Small** | 36 | 44 | 400 | text-display-small | \['2.25rem', { lineHeight: '2.75rem', fontWeight: '400' }\] |
| **Headline Large** | 32 | 40 | 400 | text-headline-large | \['2rem', { lineHeight: '2.5rem', fontWeight: '400' }\] |
| **Headline Medium** | 28 | 36 | 400 | text-headline-medium | \['1.75rem', { lineHeight: '2.25rem', fontWeight: '400' }\] |
| **Headline Small** | 24 | 32 | 400 | text-headline-small | \['1.5rem', { lineHeight: '2rem', fontWeight: '400' }\] |
| **Title Large** | 22 | 28 | 400 | text-title-large | \['1.375rem', { lineHeight: '1.75rem', fontWeight: '400' }\] |
| **Title Medium** | 16 | 24 | 500 | text-title-medium | \`\` |
| **Title Small** | 14 | 20 | 500 | text-title-small | \`\` |
| **Label Large** | 14 | 20 | 500 | text-label-large | \`\` |
| **Label Medium** | 12 | 16 | 500 | text-label-medium | \`\` |
| **Label Small** | 11 | 16 | 500 | text-label-small | \`\` |
| **Body Large** | 16 | 24 | 400 | text-body-large | \`\` |
| **Body Medium** | 14 | 20 | 400 | text-body-medium | \`\` |
| **Body Small** | 12 | 16 | 400 | text-body-small | \`\` |

*Note: pt to rem conversion is based on a standard browser font size of 16px. Letter spacing values are converted from pt to em for scalability.*  
This configuration would be added to tailwind.config.js:  
`// tailwind.config.js`  
`module.exports = {`  
  `//...`  
  `theme: {`  
    `extend: {`  
      `fontSize: {`  
        `'display-large': ['3.5625rem', { lineHeight: '4rem', fontWeight: '400' }],`  
        `'display-medium': ['2.8125rem', { lineHeight: '3.25rem', fontWeight: '400' }],`  
        `'display-small': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '400' }],`  
        `'headline-large': ['2rem', { lineHeight: '2.5rem', fontWeight: '400' }],`  
        `'headline-medium': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '400' }],`  
        `'headline-small': ['1.5rem', { lineHeight: '2rem', fontWeight: '400' }],`  
        `'title-large': ['1.375rem', { lineHeight: '1.75rem', fontWeight: '400' }],`  
        `'title-medium':,`  
        `'title-small':,`  
        `'label-large':,`  
        `'label-medium':,`  
        `'label-small':,`  
        `'body-large':,`  
        `'body-medium':,`  
        `'body-small':,`  
      `},`  
      `fontFamily: {`  
        `sans:,`  
        `'roboto-flex':,`  
      `}`  
    `},`  
  `},`  
  `plugins: [`  
    `//...`  
  `],`  
`};`

1. **Applying Typography:** With this configuration in place, developers can apply typography semantically throughout the application. For example, a page title would use class="text-headline-large", and standard body text would use class="text-body-medium". This token-based approach ensures that any future adjustments to the type scale can be made in a single location (tailwind.config.js) and will propagate consistently across the entire UI.

### **1.3 Defining Shape, Spacing, and Layout Systems**

To achieve a cohesive M3 look and feel, it is essential to establish a consistent system for shape, spacing, and layout, configured through Tailwind's theme system.

#### **Core M3 Principles**

* **Shape:** M3 uses a defined corner radius scale to bring consistency and expressiveness to component containers. The scale includes specific values that can be applied to create both symmetrical and asymmetrical shapes. This is a departure from ad-hoc radius values and is central to the M3 identity.  
* **Spacing & Layout:** M3 layouts are built upon an **8dp baseline grid**. This means that the size and spacing of all major components should align to this grid to create a consistent rhythm and visual balance. More granular spacing within components, such as padding or the space between an icon and text, aligns to a **4dp grid**. This structured approach to spacing is fundamental to creating clean, organized, and scannable user interfaces.

#### **Actionable Implementation Steps**

1. **Configure Corner Radius Tokens:** The M3 shape scale will be translated into CSS custom properties, which will then generate corresponding Tailwind utility classes. The dp (density-independent pixel) values from the M3 specification are analogous to pixels in a standard web context. Assuming a base font size of 16px, these values are converted to rem for accessibility and scalability.

| M3 Style Name | Value (dp) | Value (rem) | Tailwind Utility |
| :---- | :---- | :---- | :---- |
| None | 0 | 0rem | rounded-none |
| Extra Small | 4 | 0.25rem | rounded-xs |
| Small | 8 | 0.5rem | rounded-sm |
| Medium | 12 | 0.75rem | rounded-md |
| Large | 16 | 1rem | rounded-lg |
| Large Increased | 20 | 1.25rem | rounded-xl |
| Extra Large | 28 | 1.75rem | rounded-2xl |
| Extra Large Inc. | 32 | 2rem | rounded-3xl |
| Extra Extra Large | 48 | 3rem | rounded-4xl |
| Full | 9999 | 9999px | rounded-full |

These tokens will be defined in resources/css/app.css to generate the corresponding utilities:  
`@theme {`  
  `--radius-xs: 0.25rem;  /* 4dp */`  
  `--radius-sm: 0.5rem;   /* 8dp */`  
  `--radius-md: 0.75rem;  /* 12dp */`  
  `--radius-lg: 1rem;     /* 16dp */`  
  `--radius-xl: 1.25rem;  /* 20dp */`  
  `--radius-2xl: 1.75rem; /* 28dp */`  
  `--radius-3xl: 2rem;    /* 32dp */`  
  `--radius-4xl: 3rem;    /* 48dp */`  
`}`

1. **Configure Spacing Scale:** Tailwind's default spacing scale is already based on 0.25rem (4px) increments, which aligns perfectly with the M3 grid system. No extensive configuration is needed. The critical step is to enforce disciplined usage of these utilities. For example, a 16dp margin should be implemented with m-4, and 24dp padding with p-6. This discipline ensures all layouts adhere to the 8dp baseline grid.  
2. **Establish Layout Guidelines:** Beyond tokens, developers must understand the principles of M3 layout. Key guidelines include:  
   * **Containment:** Use surfaces (e.g., cards, dialogs) to group related content. The space *within* a container should be tighter than the space *between* containers to create clear visual boundaries.  
   * **Hierarchy:** Use different surface color roles (e.g., bg-surface-container-high for important elements, bg-surface for the main background) to establish a visual hierarchy.  
   * **Adaptive Layouts:** For complex UIs, adopt M3's pane-based layout patterns to create responsive experiences that adapt gracefully to different screen sizes, from compact mobile views to expanded desktop layouts.

By establishing this comprehensive foundation of design tokens for color, typography, and shape, the project will have a single source of truth for its visual style. This ensures consistency, simplifies development, and provides a robust framework for the component-level refactoring detailed in the next section.

## **Part 2: A Component-by-Component Refactoring Guide**

With the M3 Expressive design token foundation established in Tailwind CSS, the next phase involves the systematic refactoring of the project's existing Vue components. This section provides a detailed, practical guide for updating core UI elements, integrating expressive motion, and building new M3-native components from the ground up. The goal is to transform the resources/js/components/ui directory into a fully compliant and reusable M3 component library.

### **2.1 Core Interactive Elements: Buttons, Cards, and Inputs**

Refactoring the most fundamental components—buttons, cards, and inputs—is the first priority, as they form the building blocks for the rest of the user interface.

#### **Button Component (Button.vue)**

The existing Button.vue component already utilizes class-variance-authority (CVA) via a ButtonVariants.ts file , which is an ideal pattern for this refactoring. The task is to redefine the variants within ButtonVariants.ts to match the five standard M3 button styles: Filled, Outlined, Tonal, Elevated, and Text.

* **Refactoring Strategy:**  
  1. Modify resources/js/components/ui/button/ButtonVariants.ts to define the five M3 variants.  
  2. Each variant will map to the semantic M3 color role classes established in Part 1\.  
  3. The default corner radius will be set to rounded-full to match the M3 specification for standard buttons.  
* **Example ButtonVariants.ts Implementation:**  
  `import { cva } from 'class-variance-authority';`

  `export const buttonVariants = cva(`  
    `'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',`  
    `{`  
      `variants: {`  
        `variant: {`  
          `default: 'bg-primary text-on-primary hover:bg-primary/90', // M3 Filled Button`  
          `tonal: 'bg-secondary-container text-on-secondary-container hover:bg-secondary-container/80',`  
          `outlined: 'border border-outline bg-surface text-on-surface hover:bg-accent hover:text-accent-foreground',`  
          `elevated: 'bg-surface-container-low text-primary shadow-sm hover:shadow-md',`  
          `text: 'text-primary hover:bg-primary/10',`  
          `destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',`  
        `},`  
        `size: {`  
          `default: 'h-10 px-6 py-2',`  
          `sm: 'h-9 rounded-full px-4',`  
          `lg: 'h-11 rounded-full px-8',`  
          `icon: 'h-10 w-10',`  
        `},`  
      `},`  
      `defaultVariants: {`  
        `variant: 'default',`  
        `size: 'default',`  
      `},`  
    `}`  
  `);`

#### **Card Component (Card.vue)**

The current Card.vue component provides a single, static style. Material 3 specifies three distinct card styles: Elevated (default), Outlined, and Filled. This requires introducing a variant prop and using CVA to apply the appropriate M3 surface colors and corner radii.

* **Refactoring Strategy:**  
  1. Create a CardVariants.ts file to manage the styles using CVA.  
  2. Introduce a variant prop to Card.vue that accepts 'elevated', 'outlined', or 'filled'.  
  3. Apply the correct M3 surface color roles (e.g., bg-surface for elevated, bg-surface-container-highest for filled) and corner radius (rounded-md for 12dp) based on the variant.  
* **Example Card.vue Refactoring:**  
  `<script setup lang="ts">`  
  `import { cn } from '@/lib/utils';`  
  `import { cardVariants } from './CardVariants';`  
  `import type { VariantProps } from 'class-variance-authority';`

  `interface CardProps extends VariantProps<typeof cardVariants> {`  
    `class?: string;`  
  `}`

  `const props = defineProps<CardProps>();`  
  `</script>`  
  `<template>`  
    `<div :class="cn(cardVariants({ variant }), props.class)">`  
      `<slot />`  
    `</div>`  
  `</template>`

  `// resources/js/components/ui/card/CardVariants.ts`  
  `import { cva } from 'class-variance-authority';`

  `export const cardVariants = cva(`  
    `'rounded-md text-card-foreground', // M3 Medium corner radius`  
    `{`  
      `variants: {`  
        `variant: {`  
          `elevated: 'bg-surface shadow-sm', // M3 default`  
          `outlined: 'border border-outline bg-surface',`  
          `filled: 'bg-surface-container-highest border-none',`  
        `},`  
      `},`  
      `defaultVariants: {`  
        `variant: 'elevated',`  
      `},`  
    `}`  
  `);`

#### **Input Component (Input.vue)**

The existing Input.vue component is well-structured with filled and outlined variants. The refactoring will focus on aligning the styling within InputVariants.ts with M3's color roles for input states (default, hover, focus, error).

* **Refactoring Strategy:**  
  1. Update the CVA definitions in InputVariants.ts to use the M3 color role classes.  
  2. The focus state should apply the primary color to the border/ring and label.  
  3. The error state should use the error color role.  
  4. The background for the filled variant should map to bg-surface-container-highest.

### **2.2 Navigational and Overlay Components**

Applying M3 principles to larger, more complex components requires a focus on surface colors, elevation, and containment to create a clear and intuitive information architecture.

* **AppHeader and AppSidebar :** These core layout components define the application's primary surfaces. The AppHeader should use bg-surface to blend with the main content area. The AppSidebar, being a distinct navigational region, should use a different surface color, such as bg-surface-container, to create a subtle separation. A critical M3 pattern for indicating selection in navigation is to change the background of the active item. Active links within the sidebar should use bg-secondary-container with text-on-secondary-container text color.  
* **Dialog :** Dialogs are modal overlays that demand user attention. To achieve this, the DialogContent.vue component should be updated to use a higher-elevation surface color, like bg-surface-container-high. This makes it appear visually closer to the user. The corner radius should be increased to a larger M3 value, such as rounded-2xl (28dp), to give it a softer, more prominent appearance. The overlay or "scrim" behind the dialog should use the \--m3-scrim color variable with appropriate opacity (e.g., bg-scrim/30).  
* **DropdownMenu :** Similar to dialogs, dropdowns are temporary surfaces that appear above the main UI. The DropdownMenuContent.vue component should be refactored to use bg-surface-container and an appropriate shadow to convey elevation. The corner radius should align with the M3 scale, typically rounded-md (12dp).

### **2.3 Infusing Expressive Motion**

A core tenet of M3 Expressive is the shift from static, duration-based animations to fluid, physics-based motion. This creates interactions that feel more natural, responsive, and delightful. The current project does not have a dedicated motion library, making this a crucial addition.

#### **Selecting a Motion Library**

Given the project's use of Vue 3 and the @vueuse/core library , the **@vueuse/motion** library is the recommended choice. It is lightweight, offers a declarative API that is easy to integrate into existing components, and is built on Popmotion, the same physics-based animation engine that powers the popular Framer Motion library. This aligns perfectly with the goals of M3 Expressive.

#### **Actionable Implementation Steps**

1. **Installation:** Install the library via npm: npm install @vueuse/motion.  
2. **Plugin Setup:** Register the motion plugin in the main application entry point, resources/js/app.ts.  
   `// resources/js/app.ts`  
   `import { createApp, h } from 'vue';`  
   `import { createInertiaApp } from '@inertiajs/vue3';`  
   `import { MotionPlugin } from '@vueuse/motion'; // Import the plugin`  
   `//... other imports`

   `createInertiaApp({`  
     `//...`  
     `setup({ el, App, props, plugin }) {`  
       `return createApp({ render: () => h(App, props) })`  
        `.use(plugin)`  
        `.use(MotionPlugin) // Use the motion plugin`  
        `.mount(el);`  
     `},`  
   `});`

3. **Implementation via v-motion Directive:** The library's v-motion directive provides a simple, declarative way to add animations directly in the template.  
   * **State Transitions (e.g., Buttons):** To add a subtle press effect to buttons, the v-motion-press directive can be used. This will apply a slight scale-down effect when the button is clicked, providing immediate physical feedback.  
     `<button v-motion-press class="bg-primary...">Click Me</button>`

   * **Enter/Leave Animations (e.g., Dialogs, Dropdowns):** To make components appear gracefully, use the :initial and :enter properties of the v-motion directive. This creates a smooth transition as the component is mounted to the DOM.  
     `<div`  
       `v-motion`  
       `:initial="{ opacity: 0, y: 50 }"`  
       `:enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } }"`  
     `>`  
       `</div>`

### **2.4 Building Novel M3 Expressive Components**

M3 Expressive introduces new components that embody its principles of dynamic interaction. These components are not present in the existing library and must be built from scratch.

#### **LoadingIndicator**

Unlike a standard spinner, the M3 LoadingIndicator is a dynamic element that morphs between various shapes as it animates, creating a more engaging and less monotonous waiting experience.

* **Implementation Strategy:**  
  1. Create a new component LoadingIndicator.vue.  
  2. This component will contain an SVG element.  
  3. A set of SVG path d attributes, each representing a different shape (e.g., a circle, a soft square, a star), will be defined in an array.  
  4. The @vueuse/motion library's useAnimate composable will be used to animate the d attribute of a \<path\> element, transitioning it smoothly from one shape in the array to the next in a continuous loop. This path morphing capability is a key feature that cannot be achieved with simple CSS transitions.

#### **ButtonGroup**

The M3 ButtonGroup is more than a simple container; it's an interactive component where buttons "bump and react to each other". This creates a playful and responsive feel.

* **Implementation Strategy:**  
  1. Create a new ButtonGroup.vue component that accepts a series of Button components in its slot.  
  2. The component will use a flexbox layout to arrange the buttons.  
  3. When a user hovers over a button within the group, its width will animate to a slightly larger size.  
  4. Crucially, the flex-grow property of the hovered button will be animated alongside its width. This will cause the adjacent buttons to "compress" naturally to make space, creating the signature "bumping" effect.  
  5. The v-motion directive will be applied to each button in the group to handle the animation of its width and flex-grow properties with a spring-like physical feel.

The development of these new components underscores a key shift. M3 Expressive is not just a new visual style; it's a paradigm that embraces dynamic, choreographed interactions. This requires moving beyond static CSS styling and adopting powerful JavaScript-based animation libraries to bring the user interface to life.

## **Part 3: Application-Wide Integration and Final Polish**

The final phase of the refactoring process involves applying the new M3 component library and design principles across the entire application. This ensures a cohesive user experience and completes the transition to the Material Design 3 Expressive standard. This stage moves from building individual components to composing them into complete pages and layouts.

### **3.1 Refactoring Application Layouts and Pages**

With a fully refactored and M3-compliant component library in resources/js/components/ui, the next step is to integrate these components into the application's primary layouts and individual pages.

* **Objective:** To replace all legacy UI elements with their new M3 counterparts across all layouts and pages, ensuring consistent application of spacing, typography, and color roles.  
* **Refactoring Strategy:**  
  * **Layouts (AppLayout.vue , Settings/Layout.vue ):** The main application layouts serve as the structural backbone. The refactoring process involves a systematic replacement of existing components. For example, any buttons used for navigation or actions within the layout must be replaced with the new Button.vue component, using the appropriate M3 variant (text, tonal, etc.). All padding and margins must be audited and adjusted to conform to the 8dp grid system established in Part 1 (e.g., using p-4 for 16dp, gap-2 for 8dp). Surfaces should use the defined M3 color roles, such as bg-surface for the main content area and bg-surface-container for sidebars or headers.  
  * **Pages (Dashboard.vue , Welcome.vue , Auth Pages ):** This is the final and most extensive integration step. Each page must be reviewed, and every UI element—from input fields and cards to data tables and lists—must be replaced with its new M3-compliant version. This is more than a simple search-and-replace; it's an opportunity to re-evaluate the hierarchy and composition of each page.  
    * The **Dashboard** page, for example, can leverage elevated and outlined card variants to differentiate between primary metrics and secondary information.  
    * The **Authentication** pages (Login, Register) will be updated to use the M3 Input and Button components, ensuring a consistent and modern look for the critical user onboarding flow.  
    * The **Welcome** page serves as the application's "front door" and is an ideal candidate for a "hero moment" as described in the M3 Expressive guidelines. This involves combining multiple expressive tactics—such as using text-display-large for the main heading, a rich primary-container background color, and subtle entry animations on elements—to create a strong, memorable first impression.

### **3.2 Adopting Material Symbols**

To achieve full design language consistency, the final step is to replace the existing icon set (lucide-vue-next) with Google's official Material Symbols. This ensures that the iconography aligns perfectly with the Material Design aesthetic.

* **Objective:** To replace all instances of Lucide icons with Material Symbols, leveraging their variable font capabilities for fine-tuned control over appearance.  
* **Core Principles:**  
  * The project currently uses the lucide-vue-next package. While a high-quality library, its visual style differs from Material Design.  
  * Material Symbols are provided as a variable font, which allows for programmatic control over four axes: **Fill**, **Weight**, **Grade**, and **Optical Size** (opsz). This provides a level of customization that is impossible with standard icon fonts or individual SVG files.  
  * Integration can be achieved through various NPM packages. The most direct and flexible method is to use the material-symbols package, which provides the font files and CSS, allowing for control via standard CSS properties.  
* **Actionable Implementation Steps:**  
  1. **Installation:** Remove the old icon library and install the new one:  
     `npm uninstall lucide-vue-next`  
     `npm install material-symbols`

  2. **Import CSS:** In the main JavaScript entry point, resources/js/app.ts, import the stylesheet for the desired default icon style (outlined is the M3 default).  
     `// resources/js/app.ts`  
     `import 'material-symbols/outlined.css';`  
     `//... rest of the file`

  3. **Create a Reusable Icon.vue Component:** To simplify usage and enforce consistency, create a dedicated Icon.vue component. This component will serve as a wrapper around a \<span\> element, applying the necessary classes and exposing props for the variable font axes.  
     `<template>`  
       `<span class="material-symbols-outlined" :style="iconStyle" aria-hidden="true">`  
         `<slot />`  
       `</span>`  
     `</template>`

     `<script setup lang="ts">`  
     `import { computed, type CSSProperties } from 'vue';`

     `const props = defineProps({`  
       `fill: { type: Boolean, default: false },`  
       `weight: { type: Number, default: 400 },`  
       `grade: { type: Number, default: 0 },`  
       `opticalSize: { type: Number, default: 24 },`  
     `});`

     `const iconStyle = computed((): CSSProperties => ({`  
       `` fontVariationSettings: `'FILL' ${props.fill? 1 : 0}, 'wght' ${props.weight}, 'GRAD' ${props.grade}, 'opsz' ${props.opticalSize}` ``  
     `}));`  
     `</script>`

     `<style scoped>`

  .material-symbols-outlined { font-size: v-bind(opticalSize \+ 'px'); } \</style\> \`\`\`

  1. **Systematic Replacement:** Perform a project-wide search for the old Lucide icon components and replace them with the new \<Icon\> component. The name of the icon is passed as the default slot content.  
     * **Before:** \<UserIcon class="h-5 w-5" /\>  
     * **After:** \<Icon :optical-size="20"\>person\</Icon\>  
     * **With Fill:** \<Icon fill\>star\</Icon\>

This systematic replacement ensures that the entire application's iconography is unified under the Material Design system, completing the visual and stylistic refactoring.

## **Conclusion and Strategic Recommendations**

This report has outlined a comprehensive, phased strategy for refactoring a Laravel and Vue.js application to meet the standards of Material Design 3 Expressive. The analysis confirms that the project's existing technology stack—Laravel 12, Vue 3, Inertia.js, and Tailwind CSS 4—is not a hindrance but a powerful asset for this undertaking. The use of a shadcn/ui-inspired component architecture provides a solid, composable foundation that can be evolved rather than replaced.  
The core of the strategy lies in the systematic establishment of a **design token system**. By translating M3's principles of color, typography, and shape into a concrete set of CSS variables and Tailwind utilities, the project can achieve a high degree of consistency and maintainability. This foundational work simplifies the subsequent refactoring of individual components and ensures that the entire application adheres to a single source of truth for its visual style.  
The transition to M3 Expressive is more than a reskinning; it is a philosophical shift towards a more dynamic, interactive, and emotionally resonant user experience. This is most evident in the need to introduce a physics-based animation library like @vueuse/motion and to build new, highly interactive components such as the morphing LoadingIndicator and the reactive ButtonGroup. This represents a skills uplift for the development team, moving from static UI construction to dynamic UI choreography.  
To ensure a smooth and manageable transition, a phased rollout is strongly recommended:

1. **Phase 1: Foundation (1-2 Sprints):** Dedicate initial development cycles exclusively to implementing the design token system as detailed in Part 1\. This includes generating the M3 color palette, configuring the typography scale, and defining the shape and spacing tokens in Tailwind CSS. This foundational layer must be complete and peer-reviewed before any component work begins.  
2. **Phase 2: Core Component Refactoring (2-3 Sprints):** With the foundation in place, systematically refactor the existing components in the resources/js/components/ui directory. Concurrently, build the new M3 Expressive components (LoadingIndicator, ButtonGroup). This phase should focus on creating a complete, self-contained M3 component library.  
3. **Phase 3: Application Integration (1-2 Sprints):** Begin replacing legacy components with their new M3 counterparts across all application pages and layouts. This phase involves heavy visual quality assurance and polishing of animations and interactions to ensure a cohesive experience.  
4. **Phase 4: Icon Migration (1 Sprint):** As a final, discrete step, systematically replace the entire lucide-vue-next icon set with the new Icon.vue component powered by Material Symbols. Isolating this task minimizes churn during the primary component refactoring and allows for a focused effort on achieving full iconographic consistency.

By following this structured, phased approach, the development team can successfully navigate the complexities of this front-end rewrite, mitigate risks, and deliver a final product that is not only visually stunning and compliant with the latest design standards but is also more robust, accessible, and a pleasure for both users and future developers.

# **PART 3 \- M3 Expressive Refactoring Action Plan**

This document provides a detailed, component-by-component plan for refactoring the application to align with Google's Material Design 3 (M3) Expressive standards.

## **Part 1: Foundational Setup**

This initial setup is critical and must be completed before starting component-level work. It establishes the design token system that all components will rely on.

### **1.1. M3 Color System Implementation**

The goal is to create a complete M3-compliant color system using CSS variables that can be consumed by Tailwind CSS.

* **File to Modify:** resources/css/app.css  
* **Actions:**  
  * \[ \] **Generate Tonal Palettes:** Use the official [Material Theme Builder](https://m3.material.io/theme-builder) to generate full tonal palettes from a base color (the guide suggests \#6750A4) for both light and dark themes.  
  * \[ \] **Define M3 Color Roles:** In the :root selector, define all the generated light theme color values as CSS custom properties (e.g., \--m3-primary, \--m3-surface, \--m3-surface-container-high).  
  * \[ \] **Define Dark Theme Overrides:** Inside a .dark selector, override the CSS custom properties with the generated dark theme values.  
  * \[ \] **Map Roles to Tailwind Theme:** In the @theme block, create semantic \--color-\* variables and map them to the new M3 variables (e.g., \--color-primary: var(--m3-primary);). This will automatically generate utility classes like bg-primary, text-primary, etc.

### **1.2. M3 Typography & Shape Implementation**

This step configures Tailwind to use M3's typographic and shape scales.

* **File to Modify:** resources/css/app.css  
* **Actions:**  
  * \[ \] **Define M3 Type Scale:** In the @theme block, define the 15 M3 typography styles (Display, Headline, Title, Body, Label, each in Large, Medium, Small) as custom font size utilities. This involves converting the pt values for font size and line height to rem and setting the correct font weight.  
  * \[ \] **Define M3 Shape Scale:** In the @theme block, define the M3 corner radius scale as custom \--radius-\* properties (e.g., \--radius-xs: 0.25rem; for 4dp, \--radius-md: 0.75rem; for 12dp).  
* **Package Configuration:**  
  * \[ \] **Integrate Fonts:** Configure the spatie/laravel-google-fonts package to fetch and self-host the **Roboto** and **Roboto Flex** font families with various weights.

### **1.3. Motion Library Setup**

To handle expressive animations, we need a physics-based motion library.

* **Actions:**  
  * \[ \] **Install Library:** Run npm install @vueuse/motion in your terminal.  
  * \[ \] **Register Plugin:** In resources/js/app.ts, import MotionPlugin from @vueuse/motion and register it with the Vue app using .use(MotionPlugin).

## **Part 2: Component Refactoring**

The following is a component-by-component guide to refactoring. The process for each component will be:

1. Create a variants.ts file for CVA styles.  
2. Refactor the main .vue component to use M3 tokens and structure.  
3. Split into sub-components as needed.  
4. Create a sampleData.ts file.  
5. Update the component's index.ts barrel file.  
6. Add the component to the Components.vue showcase.

### **2.1. Button**

* **Objective:** Redefine the button variants to match the five standard M3 styles: Filled, Outlined, Tonal, Elevated, and Text.  
* **File Actions:**  
  * \[ \] **Modify resources/js/components/ui/button/ButtonVariants.ts:**  
    * Replace the existing CVA variants with the five M3 styles (default can be M3 filled).  
    * Use the new semantic color role classes (e.g., bg-primary text-on-primary for filled, bg-secondary-container text-on-secondary-container for tonal).  
    * Set the base style to use rounded-full.  
    * Add a subtle v-motion-press directive to the root element in Button.vue to provide physical feedback on click.  
  * \[ \] **Create resources/js/components/ui/button/sampleData.ts:**  
    * Export an interface and an array of sample buttons, with one for each M3 variant.  
  * \[ \] **Modify resources/js/pages/Components.vue:**  
    * Import the button component and its sample data.  
    * Add a new section to display all five button variants.

### **2.2. Card**

* **Objective:** Refactor the static card into a dynamic component with three distinct M3 styles: Elevated, Outlined, and Filled.  
* **File Actions:**  
  * \[ \] **Create resources/js/components/ui/card/CardVariants.ts:**  
    * Create a CVA definition with elevated, outlined, and filled variants.  
    * Style the variants using the appropriate M3 surface colors (e.g., bg-surface shadow-sm for elevated, border border-outline for outlined, bg-surface-container-highest for filled).  
    * Set the base style to use rounded-md (12dp).  
  * \[ \] **Modify resources/js/components/ui/card/Card.vue:**  
    * Add a variant prop that accepts 'elevated' | 'outlined' | \[span\_26\](start\_span)'filled'.  
    * Apply the cardVariants to the root element.  
  * \[ \] **Create resources/js/components/ui/card/sampleData.ts:**  
    * Export an interface and sample data for each card variant.  
  * \[ \] **Modify resources/js/pages/Components.vue:**  
    * Add a new section to display the three card variants.

### **2.3. Input**

* **Objective:** Align the existing input component's styling with M3's color roles for input states (default, hover, focus, error).  
* **File Actions:**  
  * \[ \] **Modify resources/js/components/ui/input/InputVariants.ts:**  
    * Update the CVA definitions to use the M3 color roles.  
    * The background for the filled variant should map to bg-surface-container-highest.  
    * The focus state should apply the primary color to the border/ring and label.  
    * The error state should use the error color role.  
  * \[ \] **Create resources/js/components/ui/input/sampleData.ts:**  
    * Export sample data demonstrating the different input states (default, focused, error).  
  * \[ \] **Modify resources/js/pages/Components.vue:**  
    * Add a section to display the various input states.

### **2.4. Dialog**

* **Objective:** Refactor the dialog to use M3 surface colors and expressive motion for a clearer modal hierarchy.  
* **File Actions:**  
  * \[ \] **Modify resources/js/components/ui/dialog/DialogContent.vue:**  
    * Change the background color to a higher-elevation surface like bg-surface-container-high.  
    * Increase the corner radius to a larger M3 value, such as rounded-2xl (28dp).  
    * Add a v-motion directive to the root element for a graceful entry animation (e.g., fade in and slide up from the bottom).  
  * \[ \] **Modify resources/js/components/ui/dialog/DialogOverlay.vue:**  
    * Update the background color to use the M3 scrim token (bg-scrim/30).

## **Part 3: Application & Icon Integration**

This final part involves rolling out the changes globally and unifying the iconography.

### **3.1. Application Layouts**

* **Objective:** Replace all legacy UI elements in core layouts with their new M3 counterparts.  
* **File Actions:**  
  * \[ \] **Modify resources/js/layouts/AppLayout.vue (and others):**  
    * Audit and replace all buttons, inputs, etc., with the newly refactored components.  
    * Adjust all padding and margins to conform to the 8dp grid system (p-4, m-2, gap-6, etc.).  
    * Update surface colors: bg-surface for the main content area, and bg-surface-container for sidebars or distinct regions.  
  * \[ \] **Modify Navigation Elements (e.g., AppSidebar.vue):**  
    * The active navigation link should use bg-secondary-container with text-on-secondary-container for its text color.

### **3.2. Icon Migration**

* **Objective:** Replace the lucide-vue-next icon set with Google's official Material Symbols to achieve full design language consistency.  
* **Actions:**  
  * \[ \] **Uninstall Lucide:** Run npm uninstall lucide-vue-next.  
  * \[ \] **Install Material Symbols:** Run npm install material-symbols.  
  * \[ \] **Import CSS:** In resources/js/app.ts, add the line import 'material-symbols/outlined.css';.  
  * \[ \] **Create resources/js/components/Icon.vue:**  
    * Create a new, reusable icon component that wraps a \<span\>.  
    * The component should have the class material-symbols-outlined and accept the icon name as its default slot.  
    * It should expose props for the variable font axes: fill, weight, grade, and opticalSize.  
    * Use a computed property to bind these props to the font-variation-settings CSS property.  
  * \[ \] **Systematic Replacement:**  
    * Perform a project-wide search for all instances of the old Lucide icon components.  
    * Replace them with the new \<Icon\> component (e.g., \<UserIcon /\> becomes \<Icon\>person\</Icon\>).

