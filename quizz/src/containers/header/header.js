import { StyledHeader } from './styles'
import { Img } from './styles'
import { H2 } from './styles'
import LogoIcon from '../../assets/images/logo_jw10.png'

export default function Header({ title }) {
    return (
        <StyledHeader>
            <Img src={LogoIcon} alt="logo_johnywick"/>
            <H2>{ title }</H2>

        </StyledHeader>
    )
}