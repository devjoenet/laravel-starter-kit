import { cva } from 'class-variance-authority'

export const radioVariants = cva(
  'radio',
  {
    variants: {
      color: {
        primary: 'radio-primary',
        secondary: 'radio-secondary',
        accent: 'radio-accent',
        neutral: 'radio-neutral',
        info: 'radio-info',
        success: 'radio-success',
        warning: 'radio-warning',
        error: 'radio-error'
      },
      size: {
        xs: 'radio-xs',
        sm: 'radio-sm',
        md: 'radio-md',
        lg: 'radio-lg',
        xl: 'radio-xl'
      }
    },
    defaultVariants: {
      color: 'primary',
      size: 'md'
    }
  }
)
