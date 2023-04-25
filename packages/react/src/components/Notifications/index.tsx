import {
  Arrow,
  Container,
  Header,
  Icon,
  Item,
  ItemInfo,
  List,
  NotificationsButton,
} from './styles'
import { formatTimeAgo } from '../../utils'
import { NotificationIcon } from '../../assets/icons'
import classNames from 'classnames'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Text } from '../Text'
import { Button } from '../Button'
import { MdDns } from 'react-icons/md'

export type Notification = {
  id: string
  content: string
  demand: string
  unread: boolean
  createdAt: string
}
export interface NotificationsProps {
  notifications: Notification[]
}

export function Notifications({ notifications, ...props }: NotificationsProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <NotificationsButton
          className={classNames({
            'has-unread': notifications.some(
              (notification) => notification.unread,
            ),
          })}
        >
          <NotificationIcon size={22} />
        </NotificationsButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Container sideOffset={5}>
          <Header>
            <Text as="strong">Notificações</Text>
            <Button variant="tertiary" size="sm">
              Marcar todas como lidas
            </Button>
          </Header>

          <List>
            {notifications.length > 0 ? (
              <>
                {notifications.map(
                  ({ id, content, unread, demand, createdAt }) => (
                    <Item key={id} className={classNames({ unread })}>
                      <ItemInfo>
                        <Icon>
                          <MdDns />
                        </Icon>
                        <div>
                          <Text
                            size="sm"
                            dangerouslySetInnerHTML={{ __html: content }}
                          />
                          <Text as="span" size="xs">
                            {demand}
                          </Text>
                        </div>
                      </ItemInfo>

                      <Text as="span" size="xxs">
                        {formatTimeAgo(new Date(createdAt))}
                      </Text>
                    </Item>
                  ),
                )}
              </>
            ) : (
              <Text size="sm">Nada por aqui por enquanto!</Text>
            )}
          </List>

          <Button variant="tertiary" size="sm">
            Ver todas
          </Button>

          <Arrow />
        </Container>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

Notifications.displayName = 'Notifications'
