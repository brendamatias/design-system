import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'
import { Label } from '../Label'

export interface TextInputProps extends ComponentProps<typeof Input> {
  label?: string
  error?: any
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ label, prefix, error, ...props }: TextInputProps, ref) => {
    return (
      <Label label={label} error={error}>
        <TextInputContainer>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          <Input ref={ref} {...props} />
        </TextInputContainer>
      </Label>
    )
  },
)

TextInput.displayName = 'TextInput'
