//import contexte natif de React
import { createContext, useState, useEffect } from 'react'

// initialisation du composant Contexte
export const DataAllLocationsContext = createContext()

//creation du composant Provider qui partage les données du composant contexte avec lobjet Provider connecté au contexte
export const DataAllLocationsProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  //fonction recuperation de la data appartement avec les données recuperée par fetch
  const fetchData = (data) => {
    setData(data?.allLocations)
  }
  useEffect(() => {
    async function reqData() {
      try {
        const response = await fetch('http://localhost:8000/api-kasa/logements')
        const dataLocation = await response.json()
        fetchData(dataLocation)
      } catch (err) {
        console.log(err)
        setError(true)
      }
    }
    reqData()
  }, [])
  return (
    <DataAllLocationsContext.Provider value={{ data, error }}>
      {children}
    </DataAllLocationsContext.Provider>
  )
}
