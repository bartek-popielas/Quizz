import { StyledButton } from './button.styles'
import React, { useContext } from 'react'
import { StepContext } from '../../context/stepContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../assets/services/firebase'

export default function SumUpButton({ title }) {
  const { step, stepIncrement, res, setResult, newUser } = useContext(StepContext)

  const handleClick = e => {
    if (typeof stepIncrement === 'function') {
      setResult(res)
      stepIncrement(step)
    }
  }

  return <StyledButton onClick={() => handleClick()}>{title}</StyledButton>
}
