import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
// import PropTypes
import PropTypes from "prop-types"

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
    //recupération du parametre
    const param = useParams()
    console.log("param", param)
    const { id } = param
    const [dataOneLocation, setDataOneLocation] = useState({})
    const [error, setError] = useState(false)
    //verification d une chaine de caractere, comme une propriété dans l objet dataoneLocation , avant de recuperer les propriétés  pour eviter des erreur "undefined"
    const dataPictures = dataOneLocation?.pictures
    const dataTitle = dataOneLocation?.title
    const dataTag = dataOneLocation?.tags
    const dataRating = dataOneLocation?.rating

    //Inversement des données de la position de la location de la base d données de l API
    const positionLocation = dataOneLocation?.location
    const dataPosition = positionLocation && positionLocation.split("-").reverse().join(" , ")
    /*les données du nom complet  du propriétaire de la base de lA base de données de l 'API est scindé en deux partie: prénom et nom*/
    const dataOwner = dataOneLocation?.host
    const nameOwner = dataOwner?.name.split(" ");

    console.log("data position", dataPosition)
    console.log("datapicture", dataPictures)
    console.log("dataonelocation", dataOneLocation)
    console.log("data tags", dataTag)
    console.log("dataowner", dataOwner)
    console.log("datarating", dataRating)

    // requete des données d une location via son parametre de recherche "id", a chaque modification de l id dans le tableau de dependance de useEffect  et chargement des données de la requete fetch  dans le state du composant via la fonction setDataOneLocation
    useEffect(() => {
        async function reqData() {
            try {
                const response = await fetch("http://localhost:8000/api-kasa/logements/" + id)
                console.log("response", response)
                const dataLocation = await response.json()
                console.log("datalocation", dataLocation)
                setDataOneLocation(dataLocation)
            } catch (err) {
                console.log(err)
                //envoit la valeur true si il y a une erreur 
                setError(true)
            }
        }
        reqData();

    }, [id])
    //affichage d un message d erreur dans le dom si catch recupere une erreur lors de la recuperation des données de la fonction reqData
    if (error) return <div>Une erreur est survenue</div>
    return (
        <React.Fragment>
            <CarouselLocation url={dataPictures && dataPictures}>
                {/* //verifier que les url de la propriété pictures ont bien été chargé par fetch en verifiant bien que datapictures contien ces valeurs urls */}
                {dataPictures &&
                    dataPictures.map((url) => (
                        //titre alt avec l url slicé pour recuperer le numero de la photo
                        < img key={`${url.slice(-5, -4)}`} src={url} alt={`photo de location-${url.slice(-5, -4)}`} />
                    ))}
            </CarouselLocation>
            <main>
                <StyledHeaderInfoLocation
                    dataTitle={dataTitle}
                    dataPosition={dataPosition}
                    dataTag={dataTag}
                    nameOwner={nameOwner}
                    dataOwner={dataOwner?.pictures} >
                    <div className="column-left-info-location">
                        <div className="title-location"> {dataTitle && dataTitle}</div>

                        <div>{dataPosition && dataPosition}</div>
                        <StyledTagContainer>
                            {dataTag && dataTag.map((tag, index) => {
                                console.log("tag", index)
                                return <StyledTag key={`${index}-${tag}`}>
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
                <div className="collapse-descriptin-equipment">
                    <CollapseLocation />
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



export default Location