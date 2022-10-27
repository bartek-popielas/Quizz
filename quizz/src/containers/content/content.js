import { StyledContent } from './styles'
import ContentPic from "../../assets/images/content_pic300.png";
import Button from "../../Components/button/button";
import { ContentImg, ContentP } from "./styles";
import React from "react";
import Select from "../../Components/select/select";
import Header from "../header/header";


export default function Content({ step, getChange }) {


        if(step === 1) {
            return (
                <StyledContent>
                    <Header title={"Pozwól, że poznamy się lepiej.\n" +
                        "                Chciałbym zadać Ci kilka\n" +
                        "                pytań, dzięki którym dowiem\n" +
                        "                się, co uszczęśliwia Cię\n" +
                        "                najbardziej!"}/>
                    <ContentImg src={ContentPic} alt="świeca w rękach"/>
                    <ContentP>Poświęć mi zaledwie 2 minuty i
                        odpowiadając na 5 pytań dowiedz się jakie zapachy są dla Ciebie!</ContentP>
                    <Button title={"Zaczynamy"} step={step} getChange={getChange}/>
                </StyledContent>
            )
        } else if(step === 2) {
            return (
                <StyledContent>
                    <Header title={"1. Powiedz mi kim jesteś i jak masz na imię?"}/>
                    <Select/>
                    <Button title={"Zapytaj jeszcze o coś"} step={step} getChange={getChange}/>
                </StyledContent>
            )
        } else if(step === 3) {
            return (
                <StyledContent>
                    <Header title={"2. Jeśli możesz wyruszyć\n" +
                        "w podróż gdziekolwiek\n" +
                        "zechcesz. Jakie miejsce\n" +
                        "wybierzesz?"}/>
                    <Button title={"Jeszcze coś?"} step={step} getChange={getChange}/>
                </StyledContent>
            )
        }




}