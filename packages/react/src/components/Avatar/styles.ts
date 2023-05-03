import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',

  variants: {
    size: {
      lg: {
        width: '$30',
        height: '$30',
      },
      md: {
        width: '$12',
        height: '$12',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  objectFit: 'cover',
  borderRadius: 'inherit',

  variants: {
    size: {
      lg: {
        width: '100%',
        height: '100%',
      },
      md: {
        width: '100%',
        height: '100%',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray100',
  color: '$gray400',

  svg: {
    width: '$6',
    height: '$6',
  },

  variants: {
    size: {
      lg: {
        svg: { width: '$12', height: '$12' },
      },
      md: {
        svg: { width: '$6', height: '$6' },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
