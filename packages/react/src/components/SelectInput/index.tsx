import { ComponentProps } from 'react'
import * as Select from '@radix-ui/react-select'

import { SelectContainer, SelectIcon, SelectOptions } from './styles'
import { Label } from '../Label'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { SelectItem } from './SelectItem'

export interface SelectInputProps extends ComponentProps<typeof Select.Root> {
  label: string
  placeholder?: string
  error?: string
  options: {
    value: string
    label: string
  }[]
}

export const SelectInput = ({
  name,
  label,
  error,
  placeholder,
  options,
  ...props
}: SelectInputProps) => {
  return (
    <Label label={label} error={error}>
      <Select.Root {...props}>
        <SelectContainer>
          <Select.Value placeholder={placeholder} />
          <SelectIcon>
            <MdKeyboardArrowDown />
          </SelectIcon>
        </SelectContainer>

        <SelectOptions>
          <Select.Content>
            <Select.Viewport>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select.Viewport>
          </Select.Content>
        </SelectOptions>
      </Select.Root>
    </Label>
  )
}

SelectInput.displayName = 'SelectInput'
