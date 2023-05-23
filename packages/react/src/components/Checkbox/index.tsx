import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxRoot, CheckboxIndicator } from './styles'

export interface CheckboxProps extends ComponentProps<typeof CheckboxRoot> {
  label?: string
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <CheckboxContainer size="sm" as="label">
      <CheckboxRoot {...props}>
        <CheckboxIndicator asChild>
          <Check weight="bold" />
        </CheckboxIndicator>
      </CheckboxRoot>

      {label}
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
