import { InputImg, StyledItem, StyledLabel, StyledMyDiv, StyledQuestionInput } from './input.styles'
import { useContext } from 'react'
import { StepContext } from '../../context/stepContext'

export default function Input({ el }) {
  const { select, handleSelectChange } = useContext(StepContext)

  return (
    <StyledLabel key={'Input#' + el.id} inputNum={select}>
      <StyledItem>
        <StyledQuestionInput
          id={el.id}
          data-answer={el.answer}
          type={el.type}
          data-num={el.num}
          name={el.name}
          value={el.value}
          checked={select === el.id}
          onChange={handleSelectChange}
        />

        <InputImg src={el.image} alt='logo_johnywick' />
        <StyledMyDiv>{el.title}</StyledMyDiv>
      </StyledItem>
    </StyledLabel>
  )
}
