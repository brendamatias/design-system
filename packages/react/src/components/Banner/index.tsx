import { Container, Content } from './styles'
import { Heading } from '../Heading'
import { Button } from '../Button'

export interface BannerProps {
  title: string
  img: string
  redirect: {
    label: string
    onClick: () => void
  }
}

export const Banner = ({ img, title, redirect }: BannerProps) => {
  return (
    <Container
      style={{
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#8bc53f',
      }}
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
