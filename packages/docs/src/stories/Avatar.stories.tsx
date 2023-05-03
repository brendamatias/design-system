import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@vibbra-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/brendamatias.png',
    alt: 'Brenda Matias',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Large: StoryObj<AvatarProps> = {
  args: {
    size: 'lg',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
