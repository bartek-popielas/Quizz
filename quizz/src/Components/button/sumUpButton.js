import { StyledButton } from './button.styles'
import { useContext, useState } from 'react'
import { StepContext } from '../../context/stepContext'

export default function SumUpButton({ title }) {
  const { step, stepIncrement, newUser, findMax } = useContext(StepContext)
  const [result, setResult] = useState(0)

  const handleClick = () => {
    if (typeof stepIncrement === 'function') {
      stepIncrement(step)

      setResult(findMax(newUser.answers))
      console.log(result)
    }
  }

  console.log('Wynik:', findMax(newUser.answers))

  return <StyledButton onClick={() => handleClick()}>{title}</StyledButton>
}
