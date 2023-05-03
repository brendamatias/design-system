import { ComponentProps } from 'react'
import { SelectItemContainer, SelectItemText } from './styles'

export interface SelectItemProps
  extends ComponentProps<typeof SelectItemContainer> {
  children: any
}

export const SelectItem = ({ children, ...props }: SelectItemProps) => {
  return (
    <SelectItemContainer {...props}>
      <SelectItemText>{children}</SelectItemText>
    </SelectItemContainer>
  )
}
