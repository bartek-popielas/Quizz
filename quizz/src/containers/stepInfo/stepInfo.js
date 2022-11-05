import { StyledStep, StyledStepInfo } from './stepInfo.styles'
import { useContext } from 'react'
import { StepContext } from '../../context/stepContext'
import { Data } from '../../assets/data/data'

export default function StepInfo() {
  const { step } = useContext(StepContext)
  const { views } = Data

  return (
    <StyledStepInfo>
      {views.map((view, i) => (
        <StyledStep key={'Step#' + i + 1} num={step === i} />
      ))}
    </StyledStepInfo>
  )
}
