import type { Meta, StoryObj } from '@storybook/react'
import { Box, Notifications, NotificationsProps } from '@vibbra-ui/react'

export default {
  title: 'Data display/Notifications',
  component: Notifications,
  args: {
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
      {
        id: '3',
        content:
          '<strong>Brenda</strong> alterou a estimativa da tarefa página inicial',
        unread: false,
        demand: 'Demanda Y',
        createdAt: '2023-03-20T04:51:34.358Z',
      },
      {
        id: '4',
        content:
          'Seus créditos estão no fim. Insira créditos e contratrate profissionais. Lorem ipsum is lorem ipsum new lore waas fdjkajfdskl',

        unread: false,
        demand: 'Demanda Y',
        createdAt: '2020-04-20T04:51:34.358Z',
      },
      {
        id: '5',
        content:
          'Seus créditos estão no fim. Insira créditos e contratrate profissionais. Lorem ipsum is lorem ipsum new lore waas fdjkajfdskl',

        unread: false,
        demand: 'Demanda Y',
        createdAt: '2020-04-20T04:51:34.358Z',
      },
    ],
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', justifyContent: 'center' }}>{Story()}</Box>
      )
    },
  ],
} as Meta<NotificationsProps>

export const Primary: StoryObj<NotificationsProps> = {}
export const WithoutNotifications: StoryObj<NotificationsProps> = {
  args: { notifications: [] },
}
