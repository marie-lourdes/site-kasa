import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

//Import du composant react carousel integrant le composant carousel de nuka-carousel stylisé par styled-components
import CarouselLocation from "../../components/CarouselLocation"
//import du TAG 
import Tag from "../../Atoms/Tag"
import { RateStar } from "../../Atoms/IconsFontAwesome"

//styled component
import StyledMainLocation from "./StyledLocation"

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

    //Inversement des données de la position de la location de la base d données de l API
    const positionLocation = dataOneLocation?.location
    const dataPosition = positionLocation && positionLocation.split("-").reverse().join(" , ")
    {/* les données du nom complet  du propriétaire de la base de lA base de données de l 'API est scindé en deux partie: prénom et nom*/ }
    const dataOwner = dataOneLocation?.host
    const nameOwner = dataOwner?.name.split(" ");

    console.log("data position", dataPosition)

    console.log("datapicture", dataPictures)
    console.log("dataonelocation", dataOneLocation)
    console.log("data tags", dataTag)
    console.log("dataowner", dataOwner)


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
            <StyledMainLocation>
                <div className="column-left-info-location">
                    <div> {dataTitle && dataTitle}</div>

                    <div>{dataPosition && dataPosition}</div>
                    <Tag tags={dataTag} />
                </div>
                <div className="column-right-info-owner">
                    {/*nom et prenom*/}
                    <div>
                        <div>{nameOwner && nameOwner[0]}</div>
                        <div>{nameOwner && nameOwner[1]}</div>
                    </div>
                    <div className="photo-owner">
                        <img src={`${dataOwner?.picture && dataOwner.picture}`} />
                    </div>
                    <div>

                    </div>


                </div>
            </StyledMainLocation>
        </React.Fragment>
    )

}

export default Location