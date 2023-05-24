import { Text } from '@vibbra-ui/react'
import { DatePicker } from './DatePicker'

import { FilterDateContainer } from './styles'

export interface FilterDateProps {
  label?: string
  defaultStartDate?: Date
  defaultEndDate?: Date
  handleChange: (from: Date, to: Date) => void
}

export const FilterDate = ({
  label,
  defaultStartDate = new Date(),
  defaultEndDate = new Date(),
  handleChange,
}: FilterDateProps) => {
  return (
    <FilterDateContainer>
      {label && <Text size="sm">{label}</Text>}
      <DatePicker
        defaultStartDate={defaultStartDate}
        defaultEndDate={defaultEndDate}
        handleChange={handleChange}
      />
    </FilterDateContainer>
  )
}

FilterDate.displayName = 'FilterDate'
