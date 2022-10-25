import { StyledHeader } from './styles'
import { Img } from './styles'
import { H2 } from './styles'
import LogoIcon from '../../assets/images/logo_jw10.png'

export default function Header() {
    return (
        <StyledHeader>
            <Img src={LogoIcon} alt="logo_johnywick"/>
            <H2>Pozwól, że poznamy się lepiej.
                Chciałbym zadać Ci kilka
                pytań, dzięki którym dowiem
                się, co uszczęśliwia Cię
                najbardziej!</H2>

        </StyledHeader>
    )
}