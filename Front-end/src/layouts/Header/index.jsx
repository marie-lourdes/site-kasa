import logo from '../../assets/Logo-kasa.png'
import { Link, useLocation } from 'react-router-dom'

//styled component
import StyledHeader from './StyledHeader.js'
import StyledLink from '../../bases/StyledLink'

function Header() {
    const location = useLocation()
    return (
        <StyledHeader>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo Kasa" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <StyledLink to="/" $locationHome={location.pathname} > Accueil</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/about" $locationAbout={location.pathname} > A Propos</StyledLink>

                    </li>
                </ul>
            </nav>
        </StyledHeader >
    )
}

export default Header
