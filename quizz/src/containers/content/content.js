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

        const { headerTitle, imgAlt, pText, buttonTitle } = Data.view1;
        const { headerTitle2, buttonTitle2 } = Data.view2;
        const { headerTitle3, buttonTitle3 } = Data.view3;
        const { headerTitle4, buttonTitle4 } = Data.view4;
        const { headerTitle5, buttonTitle5 } = Data.view5;
        const { headerTitle6, buttonTitle6 } = Data.view6;
        const { headerTitle7, buttonTitle7 } = Data.view7;

        switch(step) {
            case 1:
                return (
                    <StyledContent>
                        <Header title={headerTitle}/>
                        <ContentImg src={ContentPic} alt={imgAlt}/>
                        <ContentP>{pText}</ContentP>
                        <Button title={buttonTitle} />
                    </StyledContent>
                )

            case 2:
                return (
                    <StyledContent>
                        <Header title={headerTitle2}/>
                        <Select/>
                        <Button title={buttonTitle2} />
                    </StyledContent>
                )

            case 3:
                return (
                    <StyledContent>
                        <Header title={headerTitle3}/>
                        <QuestionSelect/>
                        <Button title={buttonTitle3}/>
                    </StyledContent>
                )

            case 4:
                return (
                    <StyledContent>
                        <Header title={headerTitle4}/>
                        <QuestionSelect/>
                        <Button title={buttonTitle4} />
                    </StyledContent>
                )

            case 5:
                return (
                    <StyledContent>
                        <Header title={headerTitle5}/>
                        <QuestionSelect/>
                        <Button title={buttonTitle5} />
                    </StyledContent>
                )

            case 6:
                return (
                    <StyledContent>
                        <Header title={headerTitle6}/>
                        <QuestionSelect/>
                        <Button title={buttonTitle6} />
                    </StyledContent>
                )

            case 7:
                return (
                    <StyledContent>
                        <Header title={headerTitle7}/>
                        <QuestionSelect/>
                        <Button title={buttonTitle7}/>
                    </StyledContent>
                )
            default:
                alert("Something went wrong! Refresh!")
        }






}