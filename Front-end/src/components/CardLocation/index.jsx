import React from "react"

// import PropTypes
import PropTypes from "prop-types"

//styled Component
import { StyledCardLocation } from "./StyledCardLocation"

function CardLocation({ title }) {

    if (typeof title === "number") return <div className="error-data-card">Données erronées...</div>

    return (
        <React.Fragment>

            <StyledCardLocation>
                <h4><li >{title}</li></h4>
            </StyledCardLocation>

        </React.Fragment >
    )
}
CardLocation.propTypes = {
    title: PropTypes.string.isRequired,
}
/*function error() {
    const verifTitle = CardLocation.propTypes.title

    console.log("verifTitle", verifTitle)
    try {


    } catch (err) {
        console.log("erruer prop")
    }
}*/


export default CardLocation