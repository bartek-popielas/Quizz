import React, { useContext } from "react";
import Button from "../../Components/button/button";
import Select from "../../Components/select/select";
import Header from "../header/header";
import QuestionSelect from "../../Components/questionSelect/questionSelect";
import { StyledContent, ContentImg, ContentP } from "./content.styles";
import {StepContext} from "../../context/stepContext";
import { Data } from "../../assets/data/data";
import ContentPic from "../../assets/images/content_pic300.png"

export default function Content() {

        const { step } = useContext(StepContext);

        if(step === 1) {  //TODO SWITCH
            return (
                <StyledContent>
                    <Header title={Data.view1.headerTitle}/>
                    <ContentImg src={ContentPic} alt={Data.view1.imgAlt}/>
                    <ContentP>{Data.view1.pText}</ContentP>
                    <Button title={Data.view1.buttonTitle} />
                </StyledContent>
            )
        } else if(step === 2) {
            return (
                <StyledContent>
                    <Header title={"1. Powiedz mi kim jesteś i jak masz na imię?"}/>
                    <Select/>
                    <Button title={"Zapytaj jeszcze o coś"} />
                </StyledContent>
            )
        } else if(step === 3) {
            return (
                <StyledContent>
                    <Header title={"2. Jeśli możesz wyruszyć\n" +
                        "w podróż gdziekolwiek\n" +
                        "zechcesz. Jakie miejsce\n" +
                        "wybierzesz?"}/>
                    <QuestionSelect/>
                    <Button title={"Jeszcze coś?"} />

                </StyledContent>
            )
        }




}