import React from "react"
import Banner from "../../layouts/Banner"
import CardLocation from "../../components/CardLocation"
import { useContext } from "react"

import { DataContext } from "../../utils/contexte/DataContext"
import { StyledLinkCard } from "../../components/CardLocation/StyledCardLocation.js"
//style component
import StyledGallery from "./StyledHome.js"

function Home() {
    const { data, error } = useContext(DataContext)
    const appartmentData = data


    console.log("datahome", data)
    return (
        <React.Fragment>
            <Banner>
                <div className="title-home">
                    <h1> Chez vous, partout et ailleurs</h1>
                </div>
            </Banner>
            <main>
                {error && <div>Une erreur est survenue...</div>}
                <StyledGallery className="Gallery">

                    {appartmentData.map(({ id, title }) => (
                        <StyledLinkCard key={id} >
                            <CardLocation title={title}
                            />
                        </StyledLinkCard>
                    ))}
                </StyledGallery>
            </main>
        </React.Fragment>
    )
}

export default Home