import { StyledContent } from './styles'
import ContentPic from "../../assets/images/content_pic300.png";
import Button from "../../Components/button/button";
import { ContentImg } from "../content/styles";
import { ContentP } from "../content/styles";




export default function Content() {
    return (
        <StyledContent>
            <ContentImg src={ContentPic} alt="świeca w rękach"/>
            <ContentP>Poświęć mi zaledwie 2 minuty i
                odpowiadając na 5 pytań dowiedz się jakie zapachy są dla Ciebie!</ContentP>
            <Button/>
        </StyledContent>
    )
}