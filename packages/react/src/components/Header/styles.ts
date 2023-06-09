import { styled } from '../../styles'
import { Text } from '../Text'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '$5',
  padding: '$5 0',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '$5',
  },

  '@media (max-width: 600px)': {
    padding: '$5',
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
  },
})

export const ChatRedirect = styled(Text, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  cursor: 'pointer',
  width: '$12',
  height: '$12',
  borderRadius: '$xs',
  transition: 'background 0.2s ease 0s',

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
    fontSize: '$6',
  },

  '&:hover': {
    backgroundColor: '$gray100',
  },
})
