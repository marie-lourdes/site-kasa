
import { Link } from "react-router-dom"
import logo from "../../assets/Logo-kasa.png"

function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="logo Kasa" />
            </div>
            <nav>
                <ul>
                    <li> <Link to="/"> Accueil</Link></li>
                    <li> <Link to="/about"> A Propos</Link></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header