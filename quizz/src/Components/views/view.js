import React, {Fragment} from "react";
import {GlobalStyles} from "../../assets/styles/globalStyles";
import Container from "../container/container";
import Content from "../../containers/content/content";
import StepInfo from "../../containers/stepInfo/stepInfo";
import {useState} from "react";
import { StepContext } from "../../context/stepContext";

export default function View() {

    const [step, setStep] = useState(1);

    const stepIncrement = () => {
        setStep((prev) => prev + 1);
    }

        return (
            <Fragment>
                <GlobalStyles/>
                <StepContext.Provider value={{ step, stepIncrement }}>
                    <Container>
                        <Content/>
                        <StepInfo/>
                    </Container>
                </StepContext.Provider>
            </Fragment>
        );

}