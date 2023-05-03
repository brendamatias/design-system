import { ComponentProps, useRef } from 'react'
import { AvatarInputContainer, Button, Input } from './styles'
import { Avatar } from '../Avatar'
import { MdAdd } from 'react-icons/md'

export interface AvatarInputProps extends ComponentProps<typeof Input> {
  src: string
  alt: string
}

export const AvatarInput = ({ src, alt, ...props }: AvatarInputProps) => {
  const ref = useRef<any>()

  const handleChangeAvatar = () => ref?.current.click()

  return (
    <AvatarInputContainer>
      <Avatar size="lg" src={src} alt={alt} />

      <Button type="button" onClick={handleChangeAvatar}>
        <Input ref={ref} type="file" {...props} />
        <MdAdd />
      </Button>
    </AvatarInputContainer>
  )
}

AvatarInput.displayName = 'AvatarInput'
