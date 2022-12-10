import React from "react"

// import PropTypes
import PropTypes from "prop-types"

//styled Component
import { StyledCardLocation } from "./StyledCardLocation"

function CardLocation({ title, cover }) {
    // gestion de l erreur de type de données
    if (!typeof title === "string" || !typeof cover === "string") return <div className="error-data-card">Données erronées...</div>

    return (
        <React.Fragment>
            <StyledCardLocation>
                <img src={`${cover}`} alt={`Photo de couverture ${title}`} />
                <h4><li >{title}</li></h4>
            </StyledCardLocation>
        </React.Fragment >
    )
}
CardLocation.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}



export default CardLocation