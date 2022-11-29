import React from 'react'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  console.log('data useState', data)
  useEffect(() => {
    fetch('http://localhost:8000/api-kasa/logements')
      .then((res) => res.json())
      .then((data) => {
        setData(data?.appartmentData)
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  )
}

export default App
