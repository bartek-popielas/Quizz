import {StyledLabel1, StyledInput1,} from './select.styles'
import {Fragment, useState} from "react";
import {
    InputImg,
    StyledItem,
    StyledMyDiv,
    StyledLabel,
    StyledQuestionForm,
    StyledQuestionInput
} from "../questionSelect/questionSelect.styles";
import { Data } from "../../assets/data/data";
import FemaleIcon from "../../assets/images/female_icon.png";

export default function Select() {
    const [select, setSelect] = useState("optionA");

    const handleSelectChange = event => {
        const value = event.target.id;
        setSelect(value);
    };

    return (
        <Fragment>
            <StyledQuestionForm>

                {Data.sexInput.map((el) => {
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
                })}

                <StyledLabel1>Imię: </StyledLabel1>
                <StyledInput1 id="name" placeholder="Mówmy sobie po imieniu"/>
                <StyledLabel1>Wiek: </StyledLabel1>
                <StyledInput1 type="number" id="age" placeholder="Ile masz lat?"/>


            </StyledQuestionForm>









        </Fragment>

    )
}
