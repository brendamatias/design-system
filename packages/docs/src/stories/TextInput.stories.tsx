import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '@vibbra-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    label: 'Email',
    placeholder: 'client@vibbra.com.br',
  },
}

export const Error: StoryObj<TextInputProps> = {
  args: {
    label: 'Email',
    placeholder: 'client@vibbra.com.br',
    error: 'Required field',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    label: 'Email',
    placeholder: 'client@vibbra.com.br',
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    label: 'Linkedin',
    prefix: 'linkedin.com/',
    placeholder: 'Type your linkedin',
  },
}
