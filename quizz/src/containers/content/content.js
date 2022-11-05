import React, { useContext } from 'react'
import Button from '../../Components/button/button'
import Select from '../../Components/select/select'
import Header from '../header/header'
import QuestionSelect from '../../Components/questionSelect/questionSelect'
import { StyledContent, ContentImg, ContentP } from './content.styles'
import { StepContext } from '../../context/stepContext'
import { Data } from '../../assets/data/data'
import ContentPic from '../../assets/images/content_pic300.png'

export default function Content() {
  const { step } = useContext(StepContext)
  const { views } = Data

  console.log(step)

  return views.map((view, i) => {
    if (i === step) {
      return (
        <StyledContent key={view.headerTitle}>
          <Header title={view.headerTitle} />
          {view.imgAlt && <ContentImg src={ContentPic} alt={view.imgAlt} />}
          <ContentP>{view.pText}</ContentP>
          {view.sexInput && <Select inputs={view.sexInput} />}
          {view.qInput && <QuestionSelect inputs={view.qInput} />}
          <Button title={view.buttonTitle} />
        </StyledContent>
      )
    }
  })

  // switch (step) {
  //   case 1:
  //     return (
  //       <StyledContent>
  //         <Header title={headerTitle} />
  //         <ContentImg src={ContentPic} alt={imgAlt} />
  //         <ContentP>{pText}</ContentP>
  //         <Button title={buttonTitle} />
  //       </StyledContent>
  //     )
  //
  //   case 2:
  //     return (
  //       <StyledContent>
  //         <Header title={headerTitle2} />
  //         <Select />
  //         <Button title={buttonTitle2} />
  //       </StyledContent>
  //     )
  //
  //   case 3:
  //     return (
  //       <StyledContent>
  //         <Header title={headerTitle3} />
  //         <QuestionSelect />
  //         <Button title={buttonTitle3} />
  //       </StyledContent>
  //     )
  //
  //   case 4:
  //     return (
  //       <StyledContent>
  //         <Header title={headerTitle4} />
  //         <QuestionSelect />
  //         <Button title={buttonTitle4} />
  //       </StyledContent>
  //     )
  //
  //   case 5:
  //     return (
  //       <StyledContent>
  //         <Header title={headerTitle5} />
  //         <QuestionSelect />
  //         <Button title={buttonTitle5} />
  //       </StyledContent>
  //     )
  //
  //   case 6:
  //     return (
  //       <StyledContent>
  //         <Header title={headerTitle6} />
  //         <QuestionSelect />
  //         <Button title={buttonTitle6} />
  //       </StyledContent>
  //     )
  //
  //   case 7:
  //     return (
  //       <StyledContent>
  //         <Header title={headerTitle7} />
  //         <QuestionSelect />
  //         <Button title={buttonTitle7} />
  //       </StyledContent>
  //     )
  //   default:
  //     alert('Something went wrong! Refresh!')
  // }
}
