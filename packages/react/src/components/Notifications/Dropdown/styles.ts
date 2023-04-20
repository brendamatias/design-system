import { styled } from '../../../styles'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { Text } from '../../Text'

export const Container = styled(Box, {
  position: 'absolute',
  boxShadow: 'rgba(0, 0, 0, 0.3) 3px 2px 20px',
  borderRadius: '$sm',
  right: 0,
  top: 'calc(100% + $5)',
  width: 450,
  padding: 0,
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.2s ease 0s, visibility 0.2s ease 0s',

  '&::before': {
    content: '',
    position: 'absolute',
    right: 19,
    top: -8,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '0px 8px 8px',
    borderColor: 'transparent transparent $white',
  },

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

  '&.active': {
    opacity: 1,
    visibility: 'visible',
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
