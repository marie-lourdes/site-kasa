import React from "react"

// import PropTypes
import PropTypes from "prop-types"

//styled Component
import { StyledCardLocation, StyledLinkCard } from "./StyledCardLocation"

function CardLocation({ id, title }) {

    return (
        <React.Fragment>

            <StyledCardLocation>
                <h4><li >{title}</li></h4>
            </StyledCardLocation>

        </React.Fragment >
    )
}
CardLocation.protoTypes = {
    id: PropTypes.isRequired,
    title: PropTypes.string.isRequired

}

export default CardLocation