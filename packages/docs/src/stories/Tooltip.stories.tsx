import type { Meta, StoryObj } from '@storybook/react'
import { Text, Tooltip, TooltipProps } from '@vibbra-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Text size="sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    ),
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
