import { styled } from '../../styles'

export const NotificationsContainer = styled('div', {
  display: 'inline-block',
  position: 'relative',
})

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

  '&:hover, &.active': {
    backgroundColor: '$gray100',
  },
})
