import React from "react"
import Banner from "../../layouts/Banner"
import ThumbLocation from "../../components/CardLocation"


//style component
import { StyledHome, StyledGallery } from "./StyledHome.js"


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

                <StyledGallery className="Gallery">
                    <ThumbLocation />
                </StyledGallery>


            </main>
        </React.Fragment>
    )
}

export default Home