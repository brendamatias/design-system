import 'react-datepicker/dist/react-datepicker.css'

import { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt'
import { useEffect, useState } from 'react'
import { MdCalendarToday } from 'react-icons/md'
import { Container, DatePickerComponent } from './styles'

registerLocale('pt', pt)

interface DatePickerProps {
  defaultStartDate: Date
  defaultEndDate: Date
  handleChange: (from: Date, to: Date) => void
}

export const DatePicker = ({
  defaultStartDate,
  defaultEndDate,
  handleChange,
}: DatePickerProps) => {
  const [startDate, setStartDate] = useState(defaultStartDate)
  const [endDate, setEndDate] = useState(defaultEndDate)

  const onChange = (dates: any) => {
    const [start, end] = dates

    setStartDate(start)
    setEndDate(end)

    if (start && end) handleChange(start, end)
  }

  useEffect(() => {
    handleChange(defaultStartDate, defaultEndDate)
  }, [])

  return (
    <Container>
      <DatePickerComponent
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        locale="pt"
        dateFormat="d LLL, yyyy"
      />
      <MdCalendarToday size={16} color="#949494" />
    </Container>
  )
}
