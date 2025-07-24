import { cva } from 'class-variance-authority'

export const toastVariants = cva(
  'toast mb-2 w-80 shadow-lg',
  {
    variants: {
      variant: {
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
        error: 'alert-error'
      }
    },
    defaultVariants: {
      variant: 'info'
    }
  }
)
