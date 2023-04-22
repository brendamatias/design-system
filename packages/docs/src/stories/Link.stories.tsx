import type { Meta, StoryObj } from '@storybook/react'
import { Link, LinkProps } from '@vibbra-ui/react'

export default {
  title: 'Typography/Link',
  component: Link,
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Lorem ipsum',
    href: 'http://localhost:6006',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<LinkProps>

export const Primary: StoryObj<LinkProps> = {}

export const Secondary: StoryObj<LinkProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Small: StoryObj<LinkProps> = {
  args: {
    size: 'sm',
  },
}
