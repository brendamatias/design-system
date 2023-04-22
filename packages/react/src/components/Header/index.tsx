import { ComponentProps } from 'react'
import { HeaderContainer, ChatRedirect } from './styles'
import { Avatar, AvatarProps } from '../Avatar'
import { MdQuestionAnswer } from 'react-icons/md'
import { Balance } from '../Balance'
import { WalletIcon } from '../../assets/icons'
import { Notifications, Notification } from '../Notifications'
import classNames from 'classnames'

export interface HeaderProps extends ComponentProps<typeof HeaderContainer> {
  avatar: AvatarProps
  balance: number
  chatPath: string
  profilePath: string
  hasUnreadChat?: boolean
  notifications?: Notification[]
}

export function Header({
  avatar,
  balance,
  chatPath,
  profilePath,
  hasUnreadChat,
  notifications = [],
}: HeaderProps) {
  return (
    <HeaderContainer>
      <Balance value={balance} variant="secondary">
        <WalletIcon />
      </Balance>

      <ChatRedirect
        as="a"
        href={chatPath}
        className={classNames({
          'has-unread': hasUnreadChat,
        })}
      >
        <MdQuestionAnswer size={24} />
      </ChatRedirect>

      <Notifications notifications={notifications} />

      <a href={profilePath}>
        <Avatar {...avatar} />
      </a>
    </HeaderContainer>
  )
}

Header.displayName = 'Header'
