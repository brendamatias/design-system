import { ComponentProps } from 'react'
import { HeaderContainer, ChatRedirect } from './styles'
import { Avatar, AvatarProps } from '../Avatar'
import { MdQuestionAnswer } from 'react-icons/md'
import { Balance } from '../Balance'
import { WalletIcon } from '../../icons'
import { Notifications, Notification } from '../Notifications'
import classNames from 'classnames'

export interface HeaderProps extends ComponentProps<typeof HeaderContainer> {
  profile: AvatarProps
  balance: number
  chat: {
    redirect: string
    unread: boolean
  }
  notifications?: Notification[]
}

export function Header({
  profile,
  balance,
  chat,
  notifications = [],
}: HeaderProps) {
  return (
    <HeaderContainer>
      <Balance value={balance} variant="secondary">
        <WalletIcon />
      </Balance>

      <ChatRedirect
        as="a"
        href={chat.redirect}
        className={classNames({
          'has-unread': chat.unread,
        })}
      >
        <MdQuestionAnswer size={24} />
      </ChatRedirect>

      <Notifications notifications={notifications} />

      <Avatar {...profile} />
    </HeaderContainer>
  )
}

Header.displayName = 'Header'
