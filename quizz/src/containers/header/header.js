import { StyledHeader } from './header.styles'
import { Img } from './header.styles'
import { H2 } from './header.styles'
import LogoIcon from '../../assets/images/logo_jw10.png'

export default function Header({ title }) {
    return (
        <StyledHeader>
            <Img src={LogoIcon} alt="logo_johnywick"/>
            <H2>{ title }</H2>

        </StyledHeader>
    )
}