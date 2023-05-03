import * as Select from '@radix-ui/react-select'
import { styled } from '../../../styles'

export const SelectItemContainer = styled(Select.Item, {
  padding: '$3 $4',
  fontSize: '$sm',
  color: '$gray600',
  cursor: 'pointer',

  '&[data-state="checked"], &:hover': {
    backgroundColor: '$gray100',
  },
})

export const SelectItemText = styled(Select.ItemText, {
  fontFamily: '$default',
  fontWeight: '$regular',
})
