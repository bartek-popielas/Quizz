import {
    InputImg,
    StyledItem,
    StyledLabel,
    StyledMyDiv,
    StyledQuestionInput
} from "./input.styles";
import FemaleIcon from "../../assets/images/female_icon.png";


export default function Input({ el, select, handleSelectChange }) {

    return (
        <StyledLabel key={el.id} inputNum={select}>
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