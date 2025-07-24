
import { cva } from 'class-variance-authority'

export const rangeVariants = cva(
  'range',
  {
    variants: {
      color: {
        primary: 'range-primary',
        secondary: 'range-secondary',
        accent: 'range-accent',
        neutral: 'range-neutral',
        info: 'range-info',
        success: 'range-success',
        warning: 'range-warning',
        error: 'range-error'
      },
      size: {
        xs: 'range-xs',
        sm: 'range-sm',
        md: 'range-md',
        lg: 'range-lg',
        xl: 'range-xl'
      }
    },
    defaultVariants: {
      color: 'primary',
      size: 'md'
    }
  }
)
