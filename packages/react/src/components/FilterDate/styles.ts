import { styled } from '../../styles'
import { Box } from '../Box'
import { Text } from '../Text'

export const FilterDateContainer = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  padding: 0,

  [`> ${Text}`]: {
    fontWeight: '$semibold',
  },
})
