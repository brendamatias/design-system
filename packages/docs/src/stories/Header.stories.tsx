import type { Meta, StoryObj } from '@storybook/react'
import { Header, HeaderProps } from '@vibbra-ui/react'

export default {
  title: 'Navigation/Header',
  component: Header,
  args: {
    avatar: {
      src: 'https://github.com/brendamatias.png',
      alt: 'Brenda Matias',
    },
    chatPath: '/messages',
    profilePath: '/chat',
    hasUnreadChat: true,
    notifications: [
      {
        id: '1',
        content: '<strong>Brenda</strong> finalizou a tarefa Painel Dashboard',
        unread: true,
        demand: 'Vibbra',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        content: '<strong>Brenda</strong> assinou o contrato da Demanda Paínel',
        unread: true,
        demand: 'Demanda X',
        createdAt: '2023-04-18T04:51:34.358Z',
      },
    ],
    balance: 5200,
  },
} as Meta<HeaderProps>

export const Primary: StoryObj<HeaderProps> = {}

export const WithoutNotification: StoryObj<HeaderProps> = {
  args: {
    notifications: [],
  },
}

export const WithoutMessages: StoryObj<HeaderProps> = {
  args: {
    hasUnreadChat: false,
  },
}
