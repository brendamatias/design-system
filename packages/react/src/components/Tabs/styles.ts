import * as Tabs from '@radix-ui/react-tabs'
import { styled } from '../../styles'
import { Text } from '../Text'

export const TabsContainer = styled(Tabs.Root, {
  variants: {
    variant: {
      vertical: {
        display: 'flex',
        gap: '$20',
      },
      horizontal: {
        display: 'flex',
        flexDirection: 'column',
        gap: '$12',
      },
    },
  },

  defaultVariants: { variant: 'horizontal' },
})

export const TabsList = styled(Tabs.List, {
  display: 'flex',
  gap: '$12',
  borderBottom: '1px solid var(--colors-gray100)',

  '&.vertical': {
    flexDirection: 'column',
    borderBottom: 'none',
    gap: '$4',

    '> button': {
      textAlign: 'left',
      fontWeight: '$medium',

      '&:hover, &[data-state="active"]': {
        '&::after': {
          display: 'none',
        },
      },
    },
  },
})

export const TabsItem = styled(Tabs.Trigger, {
  border: 0,
  background: 0,
  fontFamily: '$default',
  cursor: 'pointer',
  fontWeight: '$semibold',
  color: '$gray600',
  position: 'relative',
  paddingBottom: '$2',
  fontSize: '$sm',
  whiteSpace: 'nowrap',

  '&:hover, &[data-state="active"]': {
    color: '$vibbra300',

    '&::after': {
      display: 'block',
    },
  },

  '&::after': {
    display: 'none',
    content: '',
    width: '100%',
    background: '$vibbra300',
    position: 'absolute',
    height: 2,
    right: 0,
    bottom: -1,
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '$5',
    width: '$5',
    borderRadius: '$full',
    top: -15,
    right: -20,
    background: '$red',
    color: '$white',
  },
})

export const TabsContent = styled(Tabs.Content, {
  width: '100%',
  height: '100%',
})

export const TabsTitle = styled(Text, {
  minWidth: '200px',
})
