import React from "react"
import { useContext } from "react"

// import PropTypes
import PropTypes from "prop-types"

import { DataOneLocationContext } from "../../utils/contexte-fetch/DataOneLocationContext"

//Import du composant react carousel integrant le composant carousel de nuka-carousel stylisé par styled-components
import CarouselLocation from "../../components/CarouselLocation"

//import rate star Font-Awesome
import { RateStar } from "../../Atoms/IconsFontAwesome"
//import Collapse Location
import CollapseLocation from "../../components/Collapse/CollapseLocation"

//styled component
import StyledHeaderInfoLocation from "./StyledLocation"
import { StyledTag, StyledTagContainer } from "../../Atoms/Tag/StyledTag"

function Location() {
    const { dataPictures, dataTitle, dataTag, dataRating, dataPosition, dataOwner, nameOwner, dataDescription, dataEquipments } = useContext(DataOneLocationContext)
    console.log("typeof datatag", dataTag)

    return (
        <React.Fragment>
            <CarouselLocation url={dataPictures && dataPictures}>
                {/* //verifier que les url de la propriété pictures ont bien été chargé par fetch en verifiant bien que datapictures contien ces valeurs urls */}
                {/* definition des children du composant Location qui s affichent dans le composant nuka-carousel*/}
                {dataPictures &&
                    dataPictures.map((url) => (
                        //titre alt avec l url slicé pour recuperer le numero de la photo
                        < img key={`${url.slice(-5, -4)}`} src={url} alt={`photo de location-${url.slice(-5, -4)}`} />
                    ))}
            </CarouselLocation>
            <main>
                <StyledHeaderInfoLocation
                    dataTitle={dataTitle && dataTitle}
                    dataPosition={dataPosition && dataPosition}
                    dataTag={dataTag && dataTag}
                    nameOwner={nameOwner && nameOwner}
                    dataOwner={dataOwner?.pictures} >
                    <div className="column-left-info-location">
                        <div className="title-location"> {dataTitle && dataTitle}</div>
                        <div>{dataPosition && dataPosition}</div>
                        <StyledTagContainer>
                            {dataTag && dataTag.map((tag, index) => {
                                console.log("tag ", tag)
                                const tagLittle = tag.split("")
                                {


                                    if (tagLittle.length <= 5) console.log("taglITTLE", tagLittle)
                                }
                                return <StyledTag key={`${index}-${tag}`} tagLittle={tagLittle.length <= 7}>
                                    {tag}
                                </StyledTag>
                            })}
                        </StyledTagContainer>
                    </div>
                    <div className="column-right-info-owner">
                        {/*nom et prenom*/}
                        <div className="info-owner">
                            <div className="name-owner">
                                <div>{nameOwner && nameOwner[0]}</div>
                                <div>{nameOwner && nameOwner[1]}</div>
                            </div>
                            <div className="photo-owner">
                                <img src={`${dataOwner?.picture && dataOwner.picture}`} />
                            </div>
                        </div>
                        <div className="rating">
                            <RateStar rating={dataRating && dataRating} />
                        </div>
                    </div>
                </StyledHeaderInfoLocation>
                <div className="collapse-location-row">
                    <CollapseLocation dataDescription={dataDescription} dataEquipments={dataEquipments} />
                </div>
            </main>
        </React.Fragment >
    )
}

//verification des types de données recupéré par fetch dans le hook useEffect
StyledHeaderInfoLocation.propTypes = {
    dataTitle: PropTypes.string,
    dataPosition: PropTypes.string,
    dataTag: PropTypes.arrayOf(PropTypes.string),
    nameOwner: PropTypes.arrayOf(PropTypes.string),
    dataOwner: PropTypes.string
}

CollapseLocation.propTypes = {
    dataDescription: PropTypes.string,
    dataEquipments: PropTypes.arrayOf(PropTypes.string),


}

export default Location