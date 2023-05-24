import { Box, Text, styled } from '@vibbra-ui/react'

export const FilterDateContainer = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  padding: 0,

  [`> ${Text}`]: {
    fontWeight: '$semibold',
  },
})
