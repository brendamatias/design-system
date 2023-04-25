import { ComponentProps, ReactElement } from 'react'
import * as ReactTooltip from '@radix-ui/react-tooltip'

import { TooltipTrigger, TooltipContent, TooltipArrow } from './styles'
import { QuestionCircleFillIcon } from '../../assets/icons/Question'

export interface TooltipProps extends ComponentProps<typeof TooltipTrigger> {
  children: ReactElement
}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <ReactTooltip.Provider delayDuration={100}>
      <ReactTooltip.Root>
        <TooltipTrigger asChild {...props}>
          <span>
            <QuestionCircleFillIcon />
          </span>
        </TooltipTrigger>

        <ReactTooltip.Portal>
          <TooltipContent>
            {children}
            <TooltipArrow />
          </TooltipContent>
        </ReactTooltip.Portal>
      </ReactTooltip.Root>
    </ReactTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
