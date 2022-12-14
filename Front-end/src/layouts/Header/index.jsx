import logo from '../../assets/Logo-kasa.png'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

//styled component
import StyledHeader from './StyledHeader.js'
import StyledLink from '../../bases/StyledLink'

function Header() {
    const location = useLocation()
    const [activelink, setActive] = useState("is-inactive")

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
                        <StyledLink to="/" $locationHome={location.pathname} $activeLinkHome={activelink} onClick={() => setActive("is-active")}  > Accueil</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/about" $location={location.pathname} $activeLinkAbout={activelink} onClick={() => setActive("is-active")}  > A Propos</StyledLink>

                    </li>
                </ul>
            </nav>
        </StyledHeader >
    )
}

export default Header
