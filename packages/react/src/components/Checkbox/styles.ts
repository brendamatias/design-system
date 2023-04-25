import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'
import { Text } from '../Text'

export const CheckboxContainer = styled(Text, {
  display: 'flex',
  alignItems: 'center',
  fontWeight: '$medium',
  color: '$gray200',
  gap: '$2',
})

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  width: '$4',
  height: '$4',
  backgroundColor: '$white',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray100',

  '&[data-state="checked"]': {
    backgroundColor: '$vibbra300',
  },

  '&:focus, &[data-state="checked"]': {
    borderColor: '$vibbra300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
