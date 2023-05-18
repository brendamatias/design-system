import { styled } from '../../styles'

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 284,
  width: '100%',
  border: '1px solid #e9e9f0',
  padding: '$8',
  textAlign: 'center',
  borderRadius: '$xs',

  '> span': {
    fontSize: '$6xl',
    fontWeight: '$semibold',
    color: '#8bc53f',
  },
})
