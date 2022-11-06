import { StyledButton, ErrSpan } from './button.styles'
import { useContext, useState } from 'react'
import { StepContext } from '../../context/stepContext'

export default function Button({ title }) {
  const { step, stepIncrement, select, newUser } = useContext(StepContext)
  const [err, setErr] = useState('')

  const handleClick = () => {
    if (typeof stepIncrement === 'function' && step === 0) {
      stepIncrement(step)
    } else if (step === 1 && newUser.sex !== '' && newUser.name !== '' && newUser.age !== 0) {
      stepIncrement(step)
    } else if (step >= 2 && select !== '') {
      stepIncrement(step)
    } else {
      setErr('true')
    }
  }

  return (
    <>
      {err ? <ErrSpan>Żeby coś doradzić, muszę wiedzieć więcej...</ErrSpan> : null}
      <StyledButton onClick={() => handleClick()}>{title}</StyledButton>
    </>
  )
}
