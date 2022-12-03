//import style-components
import StyledPage404 from "./Page404.js"
//import style component de base Link
import StyledLink from "../../bases/StyledLink"

function Page404() {
    return (

        <StyledPage404>
            <div> 404</div>
            <span> Oups! La page que vous demandez n'existe pas</span>
            <StyledLink $link404>Retourner sur la page d'accueil</StyledLink>
        </StyledPage404>

    )
}

export default Page404