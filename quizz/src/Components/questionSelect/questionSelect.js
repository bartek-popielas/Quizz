import Input from '../input/input'
import { StyledQuestionForm } from './questionSelect.styles'

export default function QuestionSelect({ inputs }) {
  return (
    <StyledQuestionForm>
      {inputs.map(input => (
        <Input key={'Input' + input.id} el={input} />
      ))}
    </StyledQuestionForm>
  )
}
