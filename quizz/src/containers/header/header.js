import { StyledHeader } from './styles'
import LogoIcon from '../../assets/images/logo_jw.png'

export default function Header() {
    return (
        <StyledHeader>
            <img src={LogoIcon} alt="logo_johnywick"/>
            <h2>Pozwól, że poznamy się lepiej.
                Chciałbym zadać Ci kilka
                pytań, dzięki którym dowiem
                się, co uszczęśliwia Cię
                najbardziej!</h2>

        </StyledHeader>
    )
}