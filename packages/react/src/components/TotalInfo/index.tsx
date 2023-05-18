import { ComponentProps } from 'react'

import { Card } from './styles'
import { Heading } from '../Heading'
import { Text } from '../Text'

export interface TotalInfoProps extends ComponentProps<typeof Card> {
  title: string
  subtitle: string
  total: number
}

export function TotalInfo({
  title,
  subtitle,
  total,
  ...props
}: TotalInfoProps) {
  return (
    <Card {...props}>
      <Heading>{title}</Heading>
      <Text as="span">{total}</Text>

      <Text>{subtitle}</Text>
    </Card>
  )
}

TotalInfo.displayName = 'TotalInfo'
