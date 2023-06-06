import { ComponentProps, ElementRef, forwardRef } from 'react'
import { TextAreaInput } from './styles'
import { Label } from '../Label'

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput> {
  label: string
  error?: any
}

export const TextArea = forwardRef<
  ElementRef<typeof TextAreaInput>,
  TextAreaProps
>(({ label, prefix, error, ...props }: TextAreaProps, ref) => {
  return (
    <Label label={label} error={error}>
      <TextAreaInput ref={ref} {...props} />
    </Label>
  )
})

TextArea.displayName = 'TextArea'
