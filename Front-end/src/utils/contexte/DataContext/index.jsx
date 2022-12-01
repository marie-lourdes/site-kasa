//import contexte natif de React
import { createContext, useState, useEffect } from 'react'

// initialisation du composant Contexte
export const DataContext = createContext()

//creation du composant Provider qui partage les données du composant contexte avec lobjet Provider connecté au contexte
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    //fonction recuperation de la data appartement avec les données recuperée par fetch
    const fetchData = (data) => {
        setData(data?.appartmentData)
    }
    useEffect(() => {
        async function reqData() {
            try {
                const response = await fetch("http://localhost:8000/api-kasa/logements")
                const dataLocation = await response.json()

                fetchData(dataLocation)
            } catch (err) {
                console.log(err)
                setError(true)
            }
        }
        reqData();
    }, [])

    return (
        <DataContext.Provider value={{ data, error }}>
            {children}
        </DataContext.Provider>
    )
}

