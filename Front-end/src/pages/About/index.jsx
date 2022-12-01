import React from "react"
import Collapse from "../../components/Collapse"
//styled component
import StyledBanner from "../../layouts/StyledBanner"

function About() {
    return (
        <React.Fragment>
            <StyledBanner about />
            <main className="main-about">
                About
                <Collapse />
            </main>
        </React.Fragment>
    )
}

export default About