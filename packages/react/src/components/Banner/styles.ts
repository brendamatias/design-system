import { styled } from '../../styles'
import { Box } from '../Box'
import { Heading } from '../Heading'

export const Container = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: 290,
  width: '100%',
  borderRadius: '$sm',
  marginBottom: '$10',
  padding: '$5 $12',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',

  [`> ${Heading}`]: {
    textAlign: 'right',
    color: '$white',
    maxWidth: 400,
    margin: '$10 0',
  },
})
