import type { Meta, StoryObj } from '@storybook/react'
import { Box, Sidebar, SidebarProps } from '@vibbra-ui/react'
import {
  FolderFillIcon,
  FolderIcon,
  GridFillIcon,
  GridIcon,
  InboxesFillIcon,
  InboxesIcon,
  PiggyBankFillIcon,
  PiggyBankIcon,
  QuestionSquareFillIcon,
  QuestionSquareIcon,
} from '../assets/icons'

export default {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  args: {
    logoutPath: '/logout',
    callToActionText: 'Está tendo algum problema em gerenciar suas demandas?',
    links: [
      {
        title: 'Início',
        label: 'Início',
        path: '/home',
        icon: {
          default: <GridIcon />,
          fill: <GridFillIcon />,
        },
      },
      {
        title: 'Demandas',
        label: 'Demandas',
        path: '/demands',
        icon: {
          default: <InboxesIcon />,
          fill: <InboxesFillIcon />,
        },
      },
      {
        title: 'Acompanhamentos',
        label: 'Acompanhamentos',
        path: '/follow-up',
        icon: {
          default: <FolderIcon />,
          fill: <FolderFillIcon />,
        },
      },
      {
        title: 'Carteira',
        label: 'Carteira',
        path: '/wallet',
        icon: {
          default: <PiggyBankIcon />,
          fill: <PiggyBankFillIcon />,
        },
      },
      {
        title: 'FAQ',
        label: 'FAQ',
        path: '/faq',
        icon: {
          default: <QuestionSquareIcon />,
          fill: <QuestionSquareFillIcon />,
        },
      },
    ],
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<SidebarProps>

export const Primary: StoryObj<SidebarProps> = {}
