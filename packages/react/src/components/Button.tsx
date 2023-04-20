import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 120,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
        minWidth: 80,
        fontSize: '$xs',
      },

      md: {
        padding: '$3 $4',
      },
    },
    variant: {
      primary: {
        color: '$white',
        background: '$vibbra300',

        '&:not(:disabled):hover': {
          background: '$vibbra100',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$vibbra300',
        border: '2px solid $vibbra300',

        '&:not(:disabled):hover': {
          background: '$vibbra300',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        padding: 0,
        minWidth: 'auto',
        color: '$vibbra300',

        '&:not(:disabled):hover': {
          color: '$vibbra500',
        },

        '&:disabled': {
          color: '$vibbra500',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
