import { ComponentProps } from 'react'
import { styled } from '../styles'
import { Text } from './Text'

export const Link = styled(Text, {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray600',
})

export interface LinkProps extends ComponentProps<typeof Link> {}

Link.displayName = 'Link'
