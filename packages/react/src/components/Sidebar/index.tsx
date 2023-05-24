import { ReactElement } from 'react'
import {
  ButtonToggleRetracted,
  CallToAction,
  Content,
  List,
  SidebarContainer,
} from './styles'
import classNames from 'classnames'
import { useToggle } from '../../utils'
import { Text } from '../Text'
import { Link } from '../Link'
import { Button } from '../Button'
import { BurgerIcon, ChevronBarLeftIcon } from '../../assets/icons'
import { VibbraIconLogo, VibbraLogo } from '../../assets'

type LinkSidebar = {
  title: string
  label: string
  path: string
  icon: {
    default: ReactElement
    fill: ReactElement
  }
}

export interface SidebarProps {
  links: LinkSidebar[]
  logoutPath: string
  callToActionText: string
}

export const Sidebar = ({
  links,
  logoutPath,
  callToActionText,
}: SidebarProps) => {
  const [isRetracted, toggleIsRetracted] = useToggle(false)

  const isActive = (path: string) => window.location.pathname.includes(path)

  return (
    <SidebarContainer>
      <div>
        <Content>
          <div>
            {!isRetracted && <VibbraLogo />}
            <ButtonToggleRetracted
              className={classNames({
                retracted: isRetracted,
              })}
              onClick={toggleIsRetracted}
            >
              {isRetracted ? <VibbraIconLogo /> : <BurgerIcon />}
            </ButtonToggleRetracted>
          </div>

          <List>
            {links.map(({ label, path, icon }) => (
              <li key={path}>
                <Link
                  href={path}
                  variant="secondary"
                  className={classNames({
                    active: isActive(path),
                    retracted: isRetracted,
                  })}
                >
                  {isActive(path) ? icon.fill : icon.default}
                  {!isRetracted && label}
                </Link>
              </li>
            ))}
          </List>
        </Content>
        <div>
          <CallToAction
            className={classNames({
              retracted: isRetracted,
            })}
          >
            <Text size="sm">{callToActionText}</Text>
            <Button>Contate-nos</Button>
          </CallToAction>

          <Link href={logoutPath} variant="secondary">
            <ChevronBarLeftIcon />
            {!isRetracted && 'Sair da plataforma'}
          </Link>
        </div>
      </div>
    </SidebarContainer>
  )
}

Sidebar.displayName = 'Sidebar'
