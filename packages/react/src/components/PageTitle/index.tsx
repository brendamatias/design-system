import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Container } from './styles'
import { Heading } from '../Heading'

export interface PageTitleProps {
  label: string
  goBack?: () => void
}

export const PageTitle = ({ label, goBack }: PageTitleProps) => {
  return (
    <Container>
      {goBack && (
        <button onClick={goBack}>
          <MdKeyboardArrowLeft size={24} />
        </button>
      )}

      <Heading as="h1">{label}</Heading>
    </Container>
  )
}
