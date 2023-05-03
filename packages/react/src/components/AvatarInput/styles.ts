import { styled } from '../../styles'

export const AvatarInputContainer = styled('label', {
  position: 'relative',
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '$1',
  right: '$1',
  background: '$vibbra300',
  color: '$white',
  borderRadius: '$full',
  padding: '$1',
  fontSize: '18px',
  border: '2px solid $white',
})

export const Input = styled('input', {
  display: 'none',
})
