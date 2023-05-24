import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '$12',

  '> button': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    background: 'none',
    cursor: 'pointer',
  },
})
