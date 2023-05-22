import { ComponentProps, ReactElement } from 'react'
import { EmptyListContainer } from './styles'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { PersonBadgeFillIcon } from '../../assets/icons/PersonBadge'

export interface EmptyListProps
  extends ComponentProps<typeof EmptyListContainer> {
  title: string
  description: string
  children?: ReactElement
}

export function EmptyList({ title, description, children }: EmptyListProps) {
  return (
    <EmptyListContainer>
      <PersonBadgeFillIcon />
      <Heading>{title}</Heading>
      <Text size="sm">{description}</Text>

      {children}
    </EmptyListContainer>
  )
}

EmptyList.displayName = 'EmptyList'
