import { ComponentProps } from 'react'
import { TextAreaInput } from './styles'
import { Label } from '../Label'

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput> {
  label: string
  error?: string
}

export const TextArea = ({ label, error, ...props }: TextAreaProps) => {
  return (
    <Label label={label} error={error}>
      <TextAreaInput {...props} />
    </Label>
  )
}

TextArea.displayName = 'TextArea'
