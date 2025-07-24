import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'badge',
  {
    variants: {
      color: {
        neutral: 'badge-neutral',
        primary: 'badge-primary',
        secondary: 'badge-secondary',
        accent: 'badge-accent',
        info: 'badge-info',
        success: 'badge-success',
        warning: 'badge-warning',
        error: 'badge-error',
      },
      style: {
        solid: '',
        outline: 'badge-outline',
        dash: 'badge-dash',
        soft: 'badge-soft',
        ghost: 'badge-ghost',
      },
      size: {
        xs: 'badge-xs',
        sm: 'badge-sm',
        md: 'badge-md',
        lg: 'badge-lg',
        xl: 'badge-xl',
      }
    },
    defaultVariants: {
      color: 'neutral',
      style: 'solid',
      size: 'md',
    }
  }
)
