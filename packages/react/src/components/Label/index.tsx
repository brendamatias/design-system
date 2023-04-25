import { ReactElement } from 'react'
import { Container, TextLabel, FormError } from './styles'

export interface LabelProps {
  label?: string
  error?: string
  children: ReactElement
}

export const Label = ({ label, error, children }: LabelProps) => {
  return (
    <Container as="label">
      {label && (
        <TextLabel as="span" size="sm">
          {label}
        </TextLabel>
      )}

      {children}

      {error && (
        <FormError as="strong" size="sm">
          {error}
        </FormError>
      )}
    </Container>
  )
}

Label.displayName = 'Label'
