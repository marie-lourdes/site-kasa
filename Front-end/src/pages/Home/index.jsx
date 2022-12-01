import React from "react"
import Banner from "../../layouts/Banner"
import ThumbLocation from "../../components/CardLocation"

//style component
import StyledGallery from "./StyledHome.js"

function Home() {
    return (
        <React.Fragment>
            <Banner>
                <div className="title-home">
                    <h1> Chez vous, partout et ailleurs</h1>
                </div>
            </Banner>
            <main>
                <StyledGallery className="Gallery">
                    <ThumbLocation />
                </StyledGallery>
            </main>
        </React.Fragment>
    )
}

export default Home