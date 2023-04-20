import { styled } from '../../styles'
import { Text } from '../Text'

export const BalanceContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  gap: '$4',

  '> button': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    background: 'none',
    color: 'inherit',
    padding: 0,
  },

  '&:after': {
    display: 'none',
    content: '-',
    position: 'absolute',
    fontFamily: '$default',
  },

  [`> ${Text}`]: {
    color: 'inherit',
  },

  '&.visible': {
    [`> ${Text}`]: {
      visibility: 'hidden',
    },

    '&:after': {
      display: 'block',
    },
  },

  variants: {
    variant: {
      primary: {
        color: '$vibbra300',
      },
      secondary: {
        color: '$white',
        background: '$vibbra300',
        padding: '$3 $5',
        borderRadius: '$xs',
      },
    },
    size: {
      md: {
        [`> ${Text}, &:after`]: {
          fontSize: '$md',
        },

        '> button': {
          fontSize: '$sm',
        },
      },
      lg: {
        [`> ${Text}, &:after`]: {
          fontSize: '$5xl',
        },

        '> button': {
          fontSize: '$xl',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
