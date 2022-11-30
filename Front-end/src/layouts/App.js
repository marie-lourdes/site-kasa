import React from 'react'

// composant layouts react
import Header from "./Header"
import Footer from "./Footer"

//styled component
import StyledGlobal from '../bases/StyledGlobal'

//LAYOUT APP 

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
      <StyledGlobal />
      <div className="container-page">
        <Header />
        <div className="main-content">
          {children}
        </div>
      </div>

      <Footer />

    </React.Fragment >
  )
}

export default App
