import { MdAdd, MdRemove } from 'react-icons/md'
import classNames from 'classnames'
import { Button, Answer } from './styles'
import { useToggle } from '../../utils'
import { Text } from '../Text'

export interface FaqQuestionProps {
  question: string
  answer: string
}

export const FaqQuestion = ({ question, answer }: FaqQuestionProps) => {
  const [isVisible, setIsVisible] = useToggle(false)

  return (
    <div>
      <Button onClick={setIsVisible}>
        <Text size="sm">{question}</Text>

        <div>{!isVisible ? <MdAdd /> : <MdRemove />}</div>
      </Button>

      <Answer
        className={classNames({
          active: isVisible,
        })}
      >
        <Text size="sm">{answer}</Text>
      </Answer>
    </div>
  )
}
