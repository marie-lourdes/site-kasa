//import contexte natif de React
import { createContext, useState, useEffect } from 'react'
import { useParams } from "react-router"

// initialisation du composant Contexte
export const DataOneLocationContext = createContext()

//creation du composant Provider qui partage les données du composant contexte avec lobjet Provider connecté au contexte
export const DataOneLocationProvider = ({ children }) => {
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

    return (
        <DataOneLocationContext.Provider value={{ dataPictures, dataTitle, dataTag, dataRating, dataPosition, dataOwner, nameOwner, error }}>
            {children}
        </DataOneLocationContext.Provider>
    )
}