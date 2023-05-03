import * as Select from '@radix-ui/react-select'
import { styled } from '../../styles'

export const SelectContainer = styled(Select.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$4',
  backgroundColor: '$white',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray100',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray600',
  fontWeight: '$regular',
  resize: 'vertical',
  height: 46,

  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&[data-placeholder]': {
    color: '$gray400',
  },
})

export const SelectIcon = styled(Select.Icon, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$sm',
  color: '$gray600',
})

export const SelectOptions = styled(Select.Portal, {
  background: '$white',
  border: '2px solid $gray100',
  borderRadius: '$sm',
  marginTop: '$12',
  height: 'calc(100% - $16)',
})
