//import contexte natif de React
import { createContext, useState, useEffect } from 'react'

// initialisation du composant Contexte
export const DataContext = createContext()

//creation du composant Provider qui partage les données du composant contexte avec lobjet Provider connecté au contexte
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const fetchData = (data) => {
        setData(data?.appartmentData)
    }
    useEffect(() => {

        async function reqData() {
            try {
                //Si on passe une promesse à une expression await,
                // celle-ci attendra jusqu'à la résolution de la promesse et renverra la valeur de résolution.
                const response = await fetch("http://localhost:8000/api-kasa/logements")
                const dataLocation = await response.json()

                fetchData(dataLocation)
            } catch (err) {
                console.log(err)
                setError(true)

                // retourne un erreur dans le state qui actvera l affichage d un message d erreur dans le dom dans survey.jsx
                // a la recuperation du state isError dans survey.jsx
            }

        }

        reqData();

    }, [])

    // retourne le composant ThemeContext avec l objet Provider qui permet de partager les données de ThemeContext
    return (
        <DataContext.Provider value={{ data, error }}>
            {children} {/* tous les enfants englobé dans le  composant ThemeProvider auront acces à la prop "value" de ThemeContext*/}
        </DataContext.Provider>
    )
}

/*fetch("http://localhost:8000/api-kasa/logements")
            .then(res => {
                return res.json()
            })
            .then(({ appartmentData }) => {
                fetchData(appartmentData)
                console.log("appartementData", appartmentData)
            })
            .catch(error => error)*/