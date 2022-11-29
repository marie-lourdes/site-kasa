import logo from "../../assets/Logo-kasa.png"

//styled component
import StyledHeader from "./StyledHeader.js"
import StyledLink from "../../bases/StyledLink"


function Header() {
    return (
        <StyledHeader>
            <div>
                <img src={logo} alt="logo Kasa" />
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