import {
    StyledQuestionInput,
    StyledQuestionForm,
    StyledMyDiv,
    StyledLabel,
    StyledItem,
    InputImg,
} from './questionSelect.styles'
import FemaleIcon from "../../assets/images/female_icon.png";
import { Data } from "../../assets/data/data";
import { useState } from "react";



export default function QuestionSelect() {
    const [select, setSelect] = useState("");

    const handleSelectChange = event => {
        const value = event.target.id;
        setSelect(value);
    };

    console.log(select)


    return (
            <StyledQuestionForm>

                {Data.q1Inputs.map((el) => {
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
                })};



            </StyledQuestionForm>


    )
}