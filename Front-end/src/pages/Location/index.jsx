import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router"


import CarouselLocation from "../../components/CarouselLocation"

function Location() {
    //recupération du parametre
    const param = useParams()
    console.log("param", param)
    const { id } = param
    const [dataOneLocation, setDataOneLocation] = useState({})
    const [error, setError] = useState(false)
    //verification d une chaine de caractere, comme une propriété dans l objet dataoneLocation , avant de recuperer la proprité pictures pour eviter des erreur "undefined"
    const dataPictures = dataOneLocation?.pictures
    console.log("datapicture", dataPictures)
    console.log("dataonelocation", dataOneLocation)

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
                Location
            </main>
        </React.Fragment>
    )

}

export default Location