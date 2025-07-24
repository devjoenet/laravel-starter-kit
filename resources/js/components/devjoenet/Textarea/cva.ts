
import { cva } from 'class-variance-authority'

export const textareaVariants = cva(
  'textarea',
  {
    variants: {
      style: {
        default: '',
        ghost: 'textarea-ghost'
      },
      size: {
        xs: 'textarea-xs',
        sm: 'textarea-sm',
        md: 'textarea-md',
        lg: 'textarea-lg',
        xl: 'textarea-xl'
      }
    },
    defaultVariants: {
      style: 'default',
      size: 'md'
    }
  }
)
