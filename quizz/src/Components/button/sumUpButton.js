import { StyledButton } from './button.styles'
import React, { useContext } from 'react'
import { StepContext } from '../../context/stepContext'

export default function SumUpButton({ title }) {
  const { step, stepIncrement, res, setResult } = useContext(StepContext)

  const handleClick = () => {
    if (typeof stepIncrement === 'function') {
      setResult(res)
      stepIncrement(step)
    }
  }

  return <StyledButton onClick={() => handleClick()}>{title}</StyledButton>
}
