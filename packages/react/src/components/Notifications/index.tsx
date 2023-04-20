import { ComponentProps } from 'react'
import { NotificationsButton, NotificationsContainer } from './styles'
import { useToggle } from '../../utils'
import { NotificationIcon } from '../../icons'
import classNames from 'classnames'
import { Dropdown } from './Dropdown'

export type Notification = {
  id: string
  content: string
  demand: string
  unread: boolean
  createdAt: string
}
export interface NotificationsProps
  extends ComponentProps<typeof NotificationsContainer> {
  notifications: Notification[]
}

export function Notifications({ notifications, ...props }: NotificationsProps) {
  const [isDropdownVisible, toggleDropdownVisibility] = useToggle(false)

  return (
    <NotificationsContainer {...props}>
      <NotificationsButton
        onClick={toggleDropdownVisibility}
        className={classNames({
          active: isDropdownVisible,
          'has-unread': notifications.some(
            (notification) => notification.unread,
          ),
        })}
      >
        <NotificationIcon size={22} />
      </NotificationsButton>

      <Dropdown notifications={notifications} visible={isDropdownVisible} />
    </NotificationsContainer>
  )
}

Notifications.displayName = 'Notifications'
