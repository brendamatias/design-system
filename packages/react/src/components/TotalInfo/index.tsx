import { Card } from './styles'
import { Heading } from '../Heading'
import { Text } from '../Text'

export interface TotalInfoProps {
  title: string
  subtitle: string
  total: number
}

export const TotalInfo = ({ title, subtitle, total }: TotalInfoProps) => {
  return (
    <Card>
      <Heading>{title}</Heading>
      <Text as="span">{total}</Text>

      <Text>{subtitle}</Text>
    </Card>
  )
}

TotalInfo.displayName = 'TotalInfo'
