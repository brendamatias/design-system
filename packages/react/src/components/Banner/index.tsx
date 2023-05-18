import { ComponentProps } from 'react'

import { Container, Content } from './styles'
import { Heading } from '../Heading'
import { Button } from '../Button'

export interface BannerProps extends ComponentProps<typeof Container> {
  title: string
  img: string
  redirect: {
    label: string
    onClick: () => void
  }
}

export function Banner({ img, title, redirect, ...props }: BannerProps) {
  return (
    <Container
      style={{
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#8bc53f',
      }}
      {...props}
    >
      <Content>
        <Heading as="h1">{title}</Heading>

        <Button onClick={redirect?.onClick} size="lg">
          {redirect?.label}
        </Button>
      </Content>
    </Container>
  )
}

Banner.displayName = 'Banner'
