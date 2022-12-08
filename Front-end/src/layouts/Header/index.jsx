import logo from "../../assets/Logo-kasa.png"
import { Link } from "react-router-dom"

//styled component
import StyledHeader from "./StyledHeader.js"
import StyledLink from "../../bases/StyledLink"


function Header() {
    return (
        <StyledHeader>
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo Kasa" /></Link>
            </div>
            <nav>
                <ul>
                    <li> <StyledLink to="/"> Accueil</StyledLink></li>
                    <li> <StyledLink to="/about"> A Propos</StyledLink></li>
                </ul>

            </nav>
        </StyledHeader>
    )
}

export default Header