import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Link = styled('a', {
  fontFamily: '$default',
  textDecoration: 'none',
  lineHeight: '$base',
  cursor: 'pointer',
  fontWeight: '$semibold',
  transition: 'color 0.1s ease 0s',
  margin: 0,

  variants: {
    size: {
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
    },
    variant: {
      primary: {
        color: '$vibbra300',

        '&:hover': {
          color: '$gray600',
        },
      },
      secondary: {
        color: '$gray600',

        '&:hover': {
          color: '$vibbra300',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

export interface LinkProps extends ComponentProps<typeof Link> {}

Link.displayName = 'Link'
