import React, {Fragment} from "react";
import {GlobalStyles} from "../../assets/styles/globalStyles";
import Container from "../container/container";
import Content from "../../containers/content/content";
import StepInfo from "../../containers/stepInfo/stepInfo";
import {useState} from "react";


export default function View() {

    const [step, setStep] = useState(1);

    const stepIncrement = () => {
        setStep((prev) => prev + 1);
    }

        return (
            <Fragment>
                <GlobalStyles/>
                <Container>
                    <Content step={step} getChange={stepIncrement}/>
                    <StepInfo step={step}/>
                </Container>
            </Fragment>
        );

}