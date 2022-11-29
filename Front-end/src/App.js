import React from 'react'


function App({ children }) {
  /* test call api-kasa
  const [data, setData] = useState([])
  console.log('data useState', data)
  useEffect(() => {
    fetch('http://localhost:8000/api-kasa/logements')
      .then((res) => res.json())
      .then((data) => {
        setData(data?.appartmentData)
      })
  }, [])*/
  return (
    <React.Fragment>
      {children}
    </React.Fragment >
  )
}

export default App
