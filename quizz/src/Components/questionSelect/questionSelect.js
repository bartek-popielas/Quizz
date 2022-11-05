import Input from '../input/input'
import { useContext } from 'react'
import { StyledQuestionForm } from './questionSelect.styles'
import { Data } from '../../assets/data/data'
import { StepContext } from '../../context/stepContext'

export default function QuestionSelect({ inputs }) {
  return (
    <StyledQuestionForm>
      {inputs.map(input => (
        <Input key={'c' + input.id} el={input} />
      ))}
    </StyledQuestionForm>
  )
}
