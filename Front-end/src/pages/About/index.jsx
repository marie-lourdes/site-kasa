import React from "react"
import Collapse from "../../components/Collapse"
//styled component
import StyledAbout from "./StyledAbout.js"
import StyledBanner from "../../layouts/StyledBanner.js"

function About() {
    return (
        <React.Fragment>
            <StyledBanner about />
            <StyledAbout className="main-about">
                About
                <Collapse />
            </StyledAbout>
        </React.Fragment>
    )
}

export default About