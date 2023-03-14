import React, { useContext } from 'react'
import { StyledContent, ContentImg, ContentP } from './content.styles'
import { StepContext } from '../../context/stepContext'
import { Data } from '../../assets/data/data'
import Button from '../../Components/button/button'
import Select from '../../Components/select/select'
import Header from '../header/header'
import QuestionSelect from '../../Components/questionSelect/questionSelect'
import SumUpButton from '../../Components/button/sumUpButton'
import Result from '../result/result'
import ContentPic from '../../assets/images/content_pic300.png'
import Loading from '../result/loading'

export default function Content() {
  const { step, result, loading } = useContext(StepContext)
  const { views } = Data

  return views.map((view, i) => {
    if (i === step) {
      return (
        <StyledContent key={view.headerTitle}>
          <Header title={view.headerTitle} />
          {view.imgAlt && <ContentImg src={ContentPic} alt={view.imgAlt} />}
          <ContentP>{view.pText}</ContentP>
          {view.sexInput && <Select inputs={view.sexInput} />}
          {view.qInput && <QuestionSelect inputs={view.qInput} />}
          {step < 7 ? <Button title={view.buttonTitle} /> : null}
          {step === 8 && loading ? <Loading /> : null}
          {step === 9 ? <Result /> : null}
          {view.sumUp ? <SumUpButton title={view.buttonTitle} /> : null}
        </StyledContent>
      )
    }
    return false
  })
}
