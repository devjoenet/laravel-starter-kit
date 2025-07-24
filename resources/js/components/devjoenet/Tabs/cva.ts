import { cva } from 'class-variance-authority'

export const tabsVariants = cva(
  'tabs',
  {
    variants: {
      style: {
        default: '',
        boxed: 'tabs-boxed',
        lift: 'tabs-lift',
        border: 'tabs-border',
      },
      direction: {
        horizontal: '',
        vertical: 'tabs-vertical',
      },
      size: {
        sm: 'tabs-sm',
        md: 'tabs-md',
        lg: 'tabs-lg',
      }
    },
    defaultVariants: {
      style: 'default',
      direction: 'horizontal',
      size: 'md',
    }
  }
)
