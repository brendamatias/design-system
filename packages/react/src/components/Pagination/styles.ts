import { styled } from '../../styles'

export const PaginationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',

  '> button': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '$7',
    height: '$7',
    borderRadius: '$xs',
    transition: '0.3s all',
  },
})

export const PageButton = styled('button', {
  border: '1px solid $gray100',
  fontWeight: '$semibold',
  fontSize: '$xs',

  '&:hover, &.active': {
    color: '$white',
    background: '$vibbra100',
    borderColor: '$vibbra100',
  },
})

export const KeyboardButton = styled('button', {
  background: '$gray100',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
