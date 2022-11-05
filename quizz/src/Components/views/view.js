import React, { Fragment } from 'react'
import { GlobalStyles } from '../../assets/styles/globalStyles'
import Container from '../container/container'
import Content from '../../containers/content/content'
import StepInfo from '../../containers/stepInfo/stepInfo'
import { useState } from 'react'
import { StepContext } from '../../context/stepContext'

export default function View() {
  const [step, setStep] = useState(0)
  const [select, setSelect] = useState('')
  const [newUser, setNewUser] = useState({
    users: [
      {
        id: '',
        sex: '',
        name: '',
        age: 0,
        answers: {
          1: 20,
          2: 40,
          3: 0,
          4: 0,
          5: 0,
        },
      },
    ],
  })

  const handleSelectChange = e => {
    const value = e.target.id
    setSelect(value)

    if (step <= 1) {
      setNewUser(prev => ({
        users: [...prev.users, { [e.target.name]: e.target.value }],
      }))
    } else {
      setNewUser(prev => ({
        users: [...prev.users, { [e.target.id]: e.target.value }],
      }))
    }
  }

  console.log(newUser)

  const stepIncrement = () => {
    setStep(prev => prev + 1)
    setSelect('')
  }

  return (
    <Fragment>
      <GlobalStyles />
      <StepContext.Provider value={{ step, stepIncrement, select, handleSelectChange }}>
        <Container>
          <Content />
          <StepInfo />
        </Container>
      </StepContext.Provider>
    </Fragment>
  )
}
