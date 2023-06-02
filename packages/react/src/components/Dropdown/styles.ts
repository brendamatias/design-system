import { styled } from '../../styles'
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '../../styles/animations'
import { Button } from '../Button'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const DropdownButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  width: '$8',
  height: '$8',
  borderRadius: '$xs',
  transition: 'background 0.2s ease 0s',
  border: 0,
  background: 'transparent',
  position: 'relative',

  '> svg': {
    color: '$gray600',
  },

  '&:hover, &:focus, &[data-state="open"]': {
    backgroundColor: '$gray100',
    border: '0px !important',
  },
})

export const Container = styled(DropdownMenu.Content, {
  boxShadow: 'rgba(0, 0, 0, 0.3) 3px 2px 20px',
  borderRadius: '$sm',
  background: '$white',
  willChange: 'transform, opacity',
  animationDuration: '400ms',

  [`> ${Button}`]: {
    width: '100%',
    padding: '$4 $10',
    borderTop: '1px solid $gray100',
  },

  '> div': {
    maxHeight: 350,
    overflowY: 'auto',

    '&::-webkit-scrollbar': {
      height: '$2',
      width: '$2',
    },

    '&::-webkit-scrollbar-track': {
      background: '$gray100',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '$vibbra300',
      borderRadius: '$sm',

      '&:hover': {
        background: '$vibbra500',
      },
    },
  },

  '&[data-side="top"]': {
    animationName: `${slideDownAndFade}`,
  },

  '&[data-side="right"]': {
    animationName: `${slideLeftAndFade}`,
  },

  '&[data-side="bottom"]': {
    animationName: `${slideUpAndFade}`,
    margin: '0 $5 0 $5',
  },

  '&[data-side="left"]': {
    animationName: `${slideRightAndFade}`,
  },
})

export const Arrow = styled(DropdownMenu.DropdownMenuArrow, {
  fill: '$white',
})
