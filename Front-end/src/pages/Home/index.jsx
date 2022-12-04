import React from "react"
import CardLocation from "../../components/CardLocation"
import { useContext } from "react"

import { DataContext } from "../../utils/contexte/DataContext"
import { StyledLinkCard } from "../../components/CardLocation/StyledCardLocation.js"
//style component
import StyledGallery from "./StyledHome.js"
import StyledBanner from "../../layouts/StyledBanner.js"

function Home() {
    const { data, error } = useContext(DataContext)
    const appartmentData = data
    console.log(appartmentData)
    return (
        <React.Fragment>
            <StyledBanner >
                <div className="title-home">
                    <h1> Chez vous, partout et ailleurs</h1>
                </div>
            </StyledBanner>
            <main>
                {error && <div>Une erreur est survenue...</div>}
                <StyledGallery className="Gallery">

                    {appartmentData.map(({ id, title, cover }) => (
                        <StyledLinkCard to={`location/${id}`} key={id} >
                            <CardLocation
                                title={title}
                                cover={cover}
                            />
                        </StyledLinkCard>
                    ))}
                </StyledGallery>
            </main>
        </React.Fragment>
    )
}

export default Home