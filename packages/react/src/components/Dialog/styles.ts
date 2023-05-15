import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '../../styles'

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
})

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$white',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$10 0 $10 $10',
  borderRadius: '$md',
  maxWidth: '650px',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '> header': {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '$10',
    marginBottom: '$10',
    paddingRight: '$10',
  },

  '> .content': {
    paddingRight: 'calc($10 - $2)',
    overflowX: 'hidden',
    maxHeight: '500px',
  },
})

export const DialogTitle = styled(Dialog.Title, {
  fontWeight: '$semibold',
})

export const DialogDescription = styled(Dialog.Description, {
  color: '$gray400',
  marginTop: '$1',
})
