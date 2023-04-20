import { ComponentProps } from 'react'
import { BalanceContainer } from './styles'
import { formatCurrency } from '../../utils/format'
import { Text } from '../Text'
import { useToggle } from '../../utils'
import { MdRemoveRedEye } from 'react-icons/md'
import classNames from 'classnames'

export interface BalanceProps extends ComponentProps<typeof BalanceContainer> {
  value: number
}

export function Balance({ value, children, ...props }: BalanceProps) {
  const [isVisible, toggleVisibility] = useToggle(false)

  return (
    <BalanceContainer className={classNames({ visible: isVisible })} {...props}>
      {children}

      <Text as="strong">{formatCurrency(value)}</Text>

      <button type="button" onClick={toggleVisibility}>
        <MdRemoveRedEye />
      </button>
    </BalanceContainer>
  )
}

Balance.displayName = 'Balance'
