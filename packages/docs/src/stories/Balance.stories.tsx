import type { Meta, StoryObj } from '@storybook/react'
import { Balance, BalanceProps } from '@vibbra-ui/react'

export default {
  title: 'Data display/Balance',
  component: Balance,
  args: {
    value: 500,
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<BalanceProps>

export const Primary: StoryObj<BalanceProps> = {}

export const Secondary: StoryObj<BalanceProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Large: StoryObj<BalanceProps> = {
  args: {
    size: 'lg',
  },
}
