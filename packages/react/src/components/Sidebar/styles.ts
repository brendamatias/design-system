import { styled } from '../../styles'
import { Box } from '../Box'
import { Text } from '../Text'

export const SidebarContainer = styled('aside', {
  display: 'inline-block',
  height: '100vh',
  maxWidth: 340,
  background: 'rgb(249, 251, 253)',
  padding: '$20 0',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
    height: '58px',
    padding: '0 $8',

    '> svg': {
      width: '$5',
      height: '$5',
    },

    '&:hover, &.active': {
      background: '$white',
      color: '$vibbra300',
    },

    '&.retracted': {
      padding: '0 0 0 $8',
    },
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$20',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 $8',
  },
})

export const ButtonToggleRetracted = styled('button', {
  height: 40,
  border: 0,
  background: 'none',
  cursor: 'pointer',

  '&:not(.retracted) > svg': {
    width: '$7',
    height: '$7',
  },

  '&:hover': {
    color: '$vibbra300',
  },
})

export const List = styled('ul', {
  width: '100%',
  margin: 0,
  padding: 0,

  li: {
    listStyle: 'none',
  },
})

export const CallToAction = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'rgb(146, 207, 83)',
  borderRadius: '$xs',
  margin: '$5 $8',

  [`> ${Text}`]: {
    color: '$white',
    marginBottom: '$5',
  },

  '&.retracted': {
    visibility: 'hidden',
    width: 0,
    opacity: 0,
    margin: 0,
  },
})
