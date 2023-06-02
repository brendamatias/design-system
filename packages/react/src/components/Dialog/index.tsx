import { ComponentProps, ElementRef, ReactElement, forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import {
  DialogContent as Content,
  DialogTitle,
  DialogDescription,
} from './styles'
import { MdClose, MdKeyboardArrowLeft } from 'react-icons/md'
import { Text } from '../Text'

export interface DialogContentProps
  extends ComponentProps<typeof DialogPrimitive.Portal> {
  title: string
  description?: string
  children: ReactElement
  handleBack?: () => void
}

export const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Portal>,
  DialogContentProps
>(
  (
    { title, description, handleBack, children, ...props }: DialogContentProps,
    ref,
  ) => {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay />
        <Content {...props} ref={ref}>
          <header>
            <div>
              {handleBack && (
                <button type="button" onClick={handleBack}>
                  <MdKeyboardArrowLeft size={18} color="#95A3B9" />
                </button>
              )}

              <div>
                <DialogTitle>
                  <Text size="xl" as="span">
                    {title}
                  </Text>
                </DialogTitle>
                {description && (
                  <DialogDescription asChild>
                    <Text size="sm">{description}</Text>
                  </DialogDescription>
                )}
              </div>
            </div>
            <DialogPrimitive.Close aria-label="Close">
              <button type="button">
                <MdClose size={18} color="#95A3B9" />
              </button>
            </DialogPrimitive.Close>
          </header>

          <div className="content">{children}</div>
        </Content>
      </DialogPrimitive.Portal>
    )
  },
)

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger

DialogContent.displayName = 'DialogContent'
