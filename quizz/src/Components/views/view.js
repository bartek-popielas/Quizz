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
    sex: '',
    name: '',
    age: 0,
    answers: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
  })

  const findMax = obj => {
    return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b))
  }

  console.log(findMax(newUser.answers))
  console.log(newUser)

  const handleSelectChange = e => {
    const value = e.target.id
    setSelect(value)

    if (e.target.dataset.answer) {
      setNewUser(prev => {
        const prevAnswersValue = prev.answers[e.target.id]
        const newAnswers = { ...prev.answers, [e.target.id]: Number(prevAnswersValue) + Number(e.target.value) }

        return { ...prev, answers: newAnswers }
      })
    } else {
      setNewUser(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
    }
  }

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
