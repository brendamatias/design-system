import classNames from 'classnames'
import {
  TabsContainer,
  TabsList,
  TabsItem,
  TabsContent,
  TabsTitle,
} from './styles'
import { ReactElement } from 'react'
import { Text } from '../Text'

type Option = {
  id: string
  label: string
  children: ReactElement
  total?: number
}

export interface TabsProps {
  options: Option[]
  variant?: 'horizontal' | 'vertical'
  defaultValue?: string
}

export const Tabs = ({
  options,
  variant = 'horizontal',
  defaultValue,
}: TabsProps) => {
  return (
    <TabsContainer
      defaultValue={defaultValue || options[0].id}
      orientation={variant}
      variant={variant}
    >
      <TabsList className={classNames({ vertical: variant === 'vertical' })}>
        {variant === 'vertical' && (
          <>
            <TabsTitle as="strong">Índice</TabsTitle>
            <hr />
          </>
        )}
        {options.map(({ id, label, total = 0 }) => (
          <TabsItem key={id} value={id}>
            {label}

            {total > 0 && (
              <Text as="span" size="xs">
                {total}
              </Text>
            )}
          </TabsItem>
        ))}
      </TabsList>

      {options.map((option) => (
        <TabsContent key={option.id} value={option.id}>
          {option.children}
        </TabsContent>
      ))}
    </TabsContainer>
  )
}

Tabs.displayName = 'Tabs'
