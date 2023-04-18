import type { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps } from '@vibbra-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    label: 'Observation',
    placeholder: 'Add any observations...',
  },
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {},
}

export const Error: StoryObj<TextAreaProps> = {
  args: {
    error: 'Required field',
  },
}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
