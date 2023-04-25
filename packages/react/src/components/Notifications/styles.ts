import { styled } from '../../styles'
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '../../styles/animations'
import { Button } from '../Button'
import { Text } from '../Text'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const NotificationsButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  width: '$12',
  height: '$12',
  borderRadius: '$xs',
  transition: 'background 0.2s ease 0s',
  border: 0,
  background: 'transparent',
  position: 'relative',

  '&.has-unread::after': {
    content: '',
    display: 'block',
    position: 'absolute',
    height: '$3',
    width: '$3',
    borderRadius: '$full',
    top: '$2',
    right: '$2',
    background: '$red',
  },

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
  width: 450,
  willChange: 'transform, opacity',
  animationDuration: '400ms',

  [`> ${Button}`]: {
    width: '100%',
    padding: '$4 0',
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

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '$6',
  padding: '$4',
})

export const List = styled('div', {
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

  [`> ${Text}`]: {
    borderTop: '1px solid $gray100',
    textAlign: 'center',
    padding: '$10 0',
  },
})

export const Item = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '$5',
  borderTop: '1px solid $gray100',
  padding: '$4',

  '&.unread': {
    backgroundColor: '#F3F6FF',
  },

  span: {
    color: '$gray200',
  },

  [`> ${Text}`]: {
    whiteSpace: 'nowrap',
  },
})

export const ItemInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',

  '> div': {
    [`> ${Text}:first-child`]: {
      display: '-webkit-box',
      overflow: 'hidden',
      lineClamp: 2,
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
    },
  },
})

export const Icon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$full',
  width: '$7',
  height: '$7',
  background: '$vibbra300',
  color: '$white',
})

export const Arrow = styled(DropdownMenu.DropdownMenuArrow, {
  fill: '$white',
})
