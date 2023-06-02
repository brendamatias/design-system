import { Arrow, Container, DropdownButton } from './styles'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Button } from '../Button'
import { MdMoreVert } from 'react-icons/md'

export interface DropdownProps {
  items: {
    label: string
    onClick: () => void
  }[]
}

export const Dropdown = ({ items = [] }: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <DropdownButton>
          <MdMoreVert size={24} />
        </DropdownButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Container sideOffset={5}>
          {items.map(({ label, onClick }) => (
            <Button key={label} onClick={onClick} variant="tertiary" size="sm">
              {label}
            </Button>
          ))}

          <Arrow />
        </Container>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

Dropdown.displayName = 'Dropdown'
