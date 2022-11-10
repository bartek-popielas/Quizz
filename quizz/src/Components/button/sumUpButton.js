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

      const fetchProduct = async () => {
        await addDoc(collection(db, 'user_answers'), {
          sex: newUser.sex,
          name: newUser.name,
          age: newUser.age,
          answers: {
            240: newUser.answers['240'],
            241: newUser.answers['241'],
            244: newUser.answers['244'],
            242: newUser.answers['242'],
            243: newUser.answers['243'],
          },
          // product: newUser.product,
        })
      }

      fetchProduct().catch(err => console.log(err))
    }
  }

  return <StyledButton onClick={() => handleClick()}>{title}</StyledButton>
}
