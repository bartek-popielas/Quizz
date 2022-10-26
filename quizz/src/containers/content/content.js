import { StyledContent } from './styles'
import ContentPic from "../../assets/images/content_pic300.png";
import Button from "../../Components/button/button";
import { ContentImg } from "../content/styles";
import { ContentP } from "../content/styles";
import {useState} from "react";



export default function Content() {
    const [step, setStep] = useState(0);

    const stepIncrement = () => {
       setStep((prev) => prev + 1);
    }

    console.log(step);

    if(step === 0) {
        return (
            <StyledContent>
                <ContentImg src={ContentPic} alt="świeca w rękach"/>
                <ContentP>Poświęć mi zaledwie 2 minuty i
                    odpowiadając na 5 pytań dowiedz się jakie zapachy są dla Ciebie!</ContentP>
                <Button getChange={stepIncrement}/>
            </StyledContent>
        )
    } else if(step === 1) {
        return (
            <p>Siabadaba!</p>
        )
    }


}