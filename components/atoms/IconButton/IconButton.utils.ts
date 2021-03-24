import { IconButtonProps } from './IconButton.types'

export const getSize = (size: IconButtonProps['size']): string => {
  switch (size) {
    case 'large':
      return '4rem'
    case 'medium':
      return '3rem'
    case 'small':
      return '2rem'
  }
}
