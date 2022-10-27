import {StyledStep, StyledStepInfo} from "./styles";



export default function StepInfo({ step }) {

    return (
        <StyledStepInfo>
            <StyledStep num={step}/>
            <StyledStep num={step}/>
            <StyledStep num={step}/>
            <StyledStep num={step}/>
            <StyledStep num={step}/>
            <StyledStep num={step}/>
        </StyledStepInfo>
    )
}