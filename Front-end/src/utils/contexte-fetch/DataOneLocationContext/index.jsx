//import contexte natif de React
import { createContext, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

// initialisation du composant Contexte
export const DataOneLocationContext = createContext()

//creation du composant Provider qui partage les données du composant contexte avec lobjet Provider connecté au contexte
export const DataOneLocationProvider = ({ children }) => {
    const navigate = useNavigate()
    //recupération du parametre
    const param = useParams()
    const { id } = param
    const [dataOneLocation, setDataOneLocation] = useState({})

    //verification d une chaine de caractere, comme une propriété dans l objet dataoneLocation , avant de recuperer les propriétés  pour eviter des erreur "undefined"
    const dataPictures = dataOneLocation?.pictures
    const dataTitle = dataOneLocation?.title
    const dataTag = dataOneLocation?.tags
    const dataRating = dataOneLocation?.rating
    const dataDescription = dataOneLocation?.description
    const dataEquipments = dataOneLocation?.equipments

    //Inversement des données de la position de la location de la base d données de l API
    const positionLocation = dataOneLocation?.location
    const dataPosition =
        positionLocation && positionLocation.split('-').reverse().join(' , ')
    /*les données du nom complet  du propriétaire de la base de lA base de données de l 'API est scindé en deux partie: prénom et nom*/
    const dataOwner = dataOneLocation?.host
    const nameOwner = dataOwner?.name.split(' ')

    // requete des données d une location via son parametre de recherche "id", a chaque modification de l id dans le tableau de dependance de useEffect  et chargement des données de la requete fetch  dans le state du composant via la fonction setDataOneLocation
    useEffect(() => {
        async function reqData() {
            try {
                const response = await fetch('http://localhost:8000/api-kasa/logements/' + id)
                const dataLocation = await response.json()
                setDataOneLocation(dataLocation)
            } catch (err) {
                console.log(err)
                //redirection vers la page erreur, en creeant une page qui n existe pas qui genere la page404 sur une route qui n est pas defini dans les route de index.js
                navigate('/error')
            }
        }
        reqData()
    }, [id, navigate])

    return (
        <DataOneLocationContext.Provider
            value={{
                dataPictures,
                dataTitle,
                dataTag,
                dataRating,
                dataPosition,
                positionLocation,
                dataOwner,
                nameOwner,
                dataDescription,
                dataEquipments,
            }}
        >
            {children}
        </DataOneLocationContext.Provider>
    )
}
