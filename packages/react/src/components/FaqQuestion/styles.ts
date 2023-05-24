import { styled } from '../../styles'
import { Text } from '../Text'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3 $5',
  width: '100%',
  borderRadius: '$xs',
  gap: '$5',
  fontWeight: '$semibold',
  background: '#f9f9f9',
  border: 'none',
  cursor: 'pointer',
})

export const Answer = styled('div', {
  border: '1px solid #f9f9f9',
  textAlign: 'left',
  visibility: 'hidden',
  height: 0,

  [`> ${Text}`]: {
    color: '$gray200',
  },

  '&.active': {
    visibility: 'visible',
    height: '100%',
    padding: '$5',
  },
})
