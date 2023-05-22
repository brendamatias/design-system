import { styled } from '../../styles'
import { Box } from '../Box'

export const EmptyListContainer = styled(Box, {
  maxWidth: 450,
  textAlign: 'center',
  margin: '$20 auto',

  '> svg': {
    width: 60,
    height: 60,
    marginBottom: '$5',
  },

  '> h2': {
    color: '$vibbra300',
  },

  '> p': {
    margin: '$6 0 $10 0',
  },

  '> button': {
    margin: '0 auto',
  },
})
