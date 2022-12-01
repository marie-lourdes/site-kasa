import React, { useEffect, useContext } from "react"

import { DataContext } from "../../utils/contexte/DataContext"

//styled Component
import { StyledCardLocation, StyledLinkCard } from "./StyledCardLocation"


function ThumbLocation({ appartmentData }) {
    const { data } = useContext(DataContext)

    const locationData = data
    console.log("LOCATIONcard", locationData)
    console.log("card", data)

    return (
        <React.Fragment>
            {
                locationData.map(({ id, title }) => (
                    <StyledLinkCard>
                        <StyledCardLocation key={`${id}`}>
                            <h4><li>{locationData && title}</li></h4>
                        </StyledCardLocation>
                    </StyledLinkCard>
                ))
            }

        </React.Fragment >

    )
}

export default ThumbLocation