import { StyledHeader } from './styles'
import LogoIcon from '../../assets/images/logo_johnywick.jpg'

export default function Header() {
    return (
        <StyledHeader>
            <img src={LogoIcon} alt="logo_johnywick"/>
            <p>Siabadaba!</p>

        </StyledHeader>
    )
}