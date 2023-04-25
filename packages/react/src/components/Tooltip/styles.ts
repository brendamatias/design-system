import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '../../styles/animations'

export const TooltipTrigger = styled(Tooltip.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$vibbra300',
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$sm',
  padding: '$2 $4',
  background: '$white',
  boxShadow: 'rgba(0, 0, 0, 0.3) 3px 2px 20px',
  willChange: 'transform, opacity',
  animationDuration: '400ms',
  margin: '$1',

  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: `${slideDownAndFade}`,
  },

  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: `${slideLeftAndFade}`,
  },

  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: `${slideUpAndFade}`,
  },

  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: `${slideRightAndFade}`,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: 'white',
})
