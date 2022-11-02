import {
    InputImg,
    StyledItem,
    StyledLabel,
    StyledMyDiv,
    StyledQuestionInput
} from "./input.styles";
import FemaleIcon from "../../assets/images/female_icon.png";
import {useContext} from "react";
import {StepContext} from "../../context/stepContext";


export default function Input({ el }) {

    const { select, handleSelectChange } = useContext(StepContext);

    return (
        <StyledLabel key={'Input#' + el.id} inputNum={select}>
            <StyledItem>
                <StyledQuestionInput
                    id={el.id}
                    type={el.type}
                    name={el.name}
                    value={el.value}
                    checked={select === el.id}
                    onChange={event => handleSelectChange(event)}/>

                <InputImg src={FemaleIcon} alt="logo_johnywick"/>
                <StyledMyDiv>{el.title}</StyledMyDiv>
            </StyledItem>
        </StyledLabel>

    )

}