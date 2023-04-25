import classNames from 'classnames'
import {
  TabsContainer,
  TabsList,
  TabsItem,
  TabsContent,
  TabsTitle,
} from './styles'
import { ReactElement } from 'react'

type Option = {
  id: string
  label: string
  children: ReactElement
  total?: number
}

export interface TabsProps {
  options: Option[]
  variant?: 'horizontal' | 'vertical'
}

export function Tabs({ options, variant = 'horizontal' }: TabsProps) {
  return (
    <TabsContainer
      defaultValue={options[0].id}
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
        {options.map((option) => (
          <TabsItem key={option.id} value={option.id}>
            {option.label}
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
