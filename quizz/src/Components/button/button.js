import { StyledButton } from './button.styles'
import {useContext} from "react";
import {StepContext} from "../../context/stepContext";

export default function Button({ title }) {

    const { step, stepIncrement } = useContext(StepContext);

    const handleClick = () => {
        if(typeof stepIncrement === "function") {
            stepIncrement(step);
        }
    }

    return (
        <StyledButton onClick={() => handleClick()}>
            {title}
        </StyledButton>
    )
}


