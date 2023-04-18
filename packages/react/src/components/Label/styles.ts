import { Box, Text, styled } from '@vibbra-ui/react'

export const Container = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  padding: 0,
  width: '100%',
})

export const TextLabel = styled(Text, {
  fontWeight: '$semibold',
  color: '$gray500',
})

export const FormError = styled(Text, {
  color: '$red',
  fontWeight: '$semibold',
})
