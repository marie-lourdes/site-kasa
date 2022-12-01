import React from "react"
import Banner from "../../layouts/Banner"
import ThumbLocation from "../../components/CardLocation"
import { useContext } from "react"

import { DataContext } from "../../utils/contexte/DataContext"

//style component
import StyledGallery from "./StyledHome.js"

function Home() {
    const { data } = useContext(DataContext)
    return (
        <React.Fragment>
            <Banner>
                <div className="title-home">
                    <h1> Chez vous, partout et ailleurs</h1>
                </div>
            </Banner>
            <main>
                <StyledGallery className="Gallery">
                    <ThumbLocation appartmentData={{ data }} />
                </StyledGallery>
            </main>
        </React.Fragment>
    )
}

export default Home