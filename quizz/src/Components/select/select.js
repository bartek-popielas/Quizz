import { StyledLabel1, StyledInput1 } from './select.styles'
import { Fragment, useContext } from 'react'
import { StyledQuestionForm } from '../questionSelect/questionSelect.styles'
import { Data } from '../../assets/data/data'
import Input from '../input/input'
import { StepContext } from '../../context/stepContext'

export default function Select({ inputs }) {
  const { handleSelectChange } = useContext(StepContext)

  return (
    <Fragment>
      <StyledQuestionForm>
        {inputs.map(input => {
          return <Input key={'Sex#' + input.value} el={input} />
        })}

        {/*{Data.sexInput.map((el) => {*/}
        {/*    return (*/}
        {/*        <Input key={'Sex#' + el.value} el={el}/>*/}
        {/*    )*/}
        {/*})}*/}

        <StyledLabel1>Imię: </StyledLabel1>
        <StyledInput1 id='name' name='name' placeholder='Mówmy sobie po imieniu' onChange={handleSelectChange} />
        <StyledLabel1>Wiek: </StyledLabel1>
        <StyledInput1 id='age' name='age' type='number' placeholder='Ile masz lat?' onChange={handleSelectChange} />
      </StyledQuestionForm>
    </Fragment>
  )
}
