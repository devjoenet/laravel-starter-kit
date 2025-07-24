
import { cva } from 'class-variance-authority'

export const ratingVariants = cva(
  'rating',
  {
    variants: {
      size: {
        xs: 'rating-xs',
        sm: 'rating-sm',
        md: 'rating-md',
        lg: 'rating-lg',
        xl: 'rating-xl'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)
