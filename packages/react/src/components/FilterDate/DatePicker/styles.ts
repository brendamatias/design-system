import { styled } from '@vibbra-ui/react'
import DatePicker from 'react-datepicker'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  border: '1px solid $gray100',
  padding: '$2 $3',
  borderRadius: '$xs',

  '.react-datepicker-wrapper': { margin: 0 },
})

export const DatePickerComponent = styled(DatePicker, {
  textAlign: 'left',
  minWidth: 190,
  color: '#949494',
  fontWeight: '$semibold',
  padding: 0,
})
