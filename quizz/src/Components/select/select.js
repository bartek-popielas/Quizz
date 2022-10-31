import {StyledLabel1, StyledInput1,} from './select.styles'
import {Fragment, useState} from "react";
import { StyledQuestionForm } from "../questionSelect/questionSelect.styles";
import { Data } from "../../assets/data/data";
import Input from "../input/input";

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
                        <Input el={el} select={select} handleSelectChange={handleSelectChange}/>
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
