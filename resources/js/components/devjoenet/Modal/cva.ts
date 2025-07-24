import { cva } from 'class-variance-authority'

export const modalVariants = cva(
  'modal',
  {
    variants: {
      size: {
        sm: 'modal-sm',
        md: 'modal-md',
        lg: 'modal-lg',
        xl: 'modal-xl',
        full: 'modal-full'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)
