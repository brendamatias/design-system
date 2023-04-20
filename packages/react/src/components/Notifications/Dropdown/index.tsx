import { Container, Header, Icon, List, Item, ItemInfo } from './styles'
import { formatTimeAgo } from '../../../utils'
import classNames from 'classnames'
import { Button } from '../../Button'
import { Text } from '../../Text'
import { MdDns } from 'react-icons/md'
import { Notification } from '..'

export interface DropdownProps {
  notifications: Notification[]
  visible: boolean
}

export function Dropdown({ notifications, visible }: DropdownProps) {
  return (
    <Container
      className={classNames({
        active: visible,
      })}
    >
      <Header>
        <Text as="strong">Notificações</Text>
        <Button variant="tertiary" size="sm">
          Marcar todas como lidas
        </Button>
      </Header>

      <List>
        {notifications.length > 0 ? (
          <>
            {notifications.map(({ id, content, unread, demand, createdAt }) => (
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
            ))}
          </>
        ) : (
          <Text size="sm">Nada por aqui por enquanto!</Text>
        )}
      </List>

      <Button variant="tertiary" size="sm">
        Ver todas
      </Button>
    </Container>
  )
}
