import React from "react"
import { StyledTag, StyledTagContainer } from "./StyledTag"
function Tag({ tags }) {

    return (<StyledTagContainer>
        {tags && tags.map((tag) => {
            console.log("tag composant", tag)
            return <StyledTag>{tag}</StyledTag>

        })}
    </StyledTagContainer>)

}


export default Tag