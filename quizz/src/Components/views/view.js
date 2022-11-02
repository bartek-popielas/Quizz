import React, {Fragment} from "react";
import {GlobalStyles} from "../../assets/styles/globalStyles";
import Container from "../container/container";
import Content from "../../containers/content/content";
import StepInfo from "../../containers/stepInfo/stepInfo";
import {useState} from "react";
import { StepContext } from "../../context/stepContext";

export default function View() {
    const [step, setStep] = useState(1);
    const [select, setSelect] = useState("");
    const [questionBuffor, setQuestionBuffor] = useState(0);
    const [questionIdBuffor, setQuestionIdBuffor] = useState(0);
    const [newUser, setNewUser] = useState([{
        id: "",
        sex: "",
        name: "",
        age: 0,
        answers: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        }}]);


    const handleSelectChange = (e) => {
        const value = e.target.id
        setSelect(value);

        if(step <= 2) {

            setNewUser((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        } else  {
            setQuestionBuffor(e.target.value);
            setQuestionIdBuffor(e.target.id);
        }

    }


    const stepIncrement = () => {

        if(questionBuffor !== 0) {
            setStep((prev) => prev + 1);

            setNewUser((prev) => ({
                ...prev,
                answers: {
                    ...prev.answers,
                    [questionIdBuffor]: questionBuffor,
                },
            }));

        } else {
            setStep((prev) => prev + 1);
        }

    }


    console.log(newUser)
        return (
            <Fragment>
                <GlobalStyles/>
                <StepContext.Provider value={{ step, stepIncrement, select, handleSelectChange }}>
                    <Container>
                        <Content/>
                        <StepInfo/>
                    </Container>
                </StepContext.Provider>
            </Fragment>
        );

}