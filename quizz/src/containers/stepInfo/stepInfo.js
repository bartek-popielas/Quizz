import {StyledStep, StyledStepInfo} from "./stepInfo.styles";
import {useContext} from "react";
import {StepContext} from "../../context/stepContext";

export default function StepInfo() {

    const { step } = useContext(StepContext);

    const items = [];
    for(let i = 0; i < 8; i++) {
        items.push(<StyledStep key={ "Step#" + i + 1 } num={ step }/>)
    }



    return (
        <StyledStepInfo>
            {items.map((step) => {
                return step;
            })}
        </StyledStepInfo>
    )
}