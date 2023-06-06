import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, TextInputContainer } from './styles'
import { Label } from '../Label'

export interface TextInputMaskProps extends ComponentProps<typeof Input> {
  label?: string
  error?: any
}

export const TextInputMask = forwardRef<
  ElementRef<typeof Input>,
  TextInputMaskProps
>(({ label, error, ...props }: TextInputMaskProps, ref) => {
  return (
    <Label label={label} error={error}>
      <TextInputContainer>
        <Input ref={ref} {...props} />
      </TextInputContainer>
    </Label>
  )
})

TextInputMask.displayName = 'TextInputMask'
