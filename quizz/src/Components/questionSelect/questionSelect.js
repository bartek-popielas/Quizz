import { StyledQuestionForm } from './questionSelect.styles'
import { Data } from "../../assets/data/data";
import { useState } from "react";
import Input from "../input/input";
import { useContext } from "react";
import { StepContext } from "../../context/stepContext";


export default function QuestionSelect() {
    const [select, setSelect] = useState("");

    const handleSelectChange = event => {
        const value = event.target.id;
        setSelect(value);
    };

    const { step } = useContext(StepContext);

    switch(step) {
        case 3:
            return (
                <StyledQuestionForm>
                    {Data.q1Inputs.map((el) => {
                        return (
                            <Input el={el} select={select} handleSelectChange={handleSelectChange}/>
                        )
                    })};
                </StyledQuestionForm>
            )
        case 4:
            return (
                <StyledQuestionForm>
                    {Data.q2Inputs.map((el) => {
                        return (
                            <Input el={el} select={select} handleSelectChange={handleSelectChange}/>
                        )
                    })};
                </StyledQuestionForm>
            )
        case 5:
            return (
                <StyledQuestionForm>
                    {Data.q3Inputs.map((el) => {
                        return (
                            <Input el={el} select={select} handleSelectChange={handleSelectChange}/>
                        )
                    })};
                </StyledQuestionForm>
            )

        case 6:
            return (
                <StyledQuestionForm>
                    {Data.q4Inputs.map((el) => {
                        return (
                            <Input el={el} select={select} handleSelectChange={handleSelectChange}/>
                        )
                    })};
                </StyledQuestionForm>
            )

        case 7:
            return (
                <StyledQuestionForm>
                    {Data.q5Inputs.map((el) => {
                        return (
                            <Input el={el} select={select} handleSelectChange={handleSelectChange}/>
                        )
                    })};
                </StyledQuestionForm>
            )
        default:
            alert("Something went wrong! Refresh!")
    }



}