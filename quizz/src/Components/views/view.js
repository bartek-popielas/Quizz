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
  const [result, setResult] = useState(0)
  const [newUser, setNewUser] = useState({
    sex: '',
    name: '',
    age: 0,
    answers: {
      240: 0,
      241: 0,
      244: 0,
      242: 0,
      243: 0,
    },
    // product: '',
  })

  const handleSelectChange = e => {
    const value = e.target.dataset.num

    if (e.target.id === 'name' || e.target.id === 'age') {
    } else {
      setSelect(value)
    }

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
  //
  // const handleProduct = e => {
  //   setNewUser(prev => ({
  //     ...prev,
  //     [e.target.name]: e.target.href,
  //   }))
  // }

  const stepIncrement = () => {
    setStep(prev => prev + 1)
    setSelect('')
  }

  const findMax = obj => {
    return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b))
  }

  const res = findMax(newUser.answers)

  return (
    <Fragment>
      <GlobalStyles />
      <StepContext.Provider
        value={{
          step,
          stepIncrement,
          select,
          handleSelectChange,
          newUser,
          setSelect,
          res,
          result,
          setResult,
          // handleProduct,
        }}
      >
        <Container>
          <Content />
          {step < 8 ? <StepInfo /> : null}
        </Container>
      </StepContext.Provider>
    </Fragment>
  )
}
