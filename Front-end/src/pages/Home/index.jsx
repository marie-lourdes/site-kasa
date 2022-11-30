import React from "react"
import Banner from "../../layouts/Banner"
import ThumbLocation from "../../components/ThumbLocation"

//style component
import StyledHome from "./StyledHome.js"

function Home() {
    return (
        <React.Fragment>
            <StyledHome>
                <div className="title-home">
                    <h1> Chez vous, partout et ailleurs</h1>
                </div>
                <Banner />
            </StyledHome>
            <main>
                <div className="Gallery">
                    <ul>
                        <ThumbLocation />
                    </ul>

                </div>
            </main>
        </React.Fragment>
    )
}

export default Home