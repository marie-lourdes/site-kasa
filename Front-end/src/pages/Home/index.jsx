import React from "react"
import Banner from "../../layouts/Banner"

//style component
import StyledHome from "./StyledHome.js"

function Home() {
    return (<React.Fragment>
        <StyledHome>
            <h1> Chez vous, partout et ailleurs</h1>
            <Banner />


        </StyledHome>

        <main>
            Home
        </main>

    </React.Fragment>

    )
}

export default Home