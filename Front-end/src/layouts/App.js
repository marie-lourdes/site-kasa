import React from 'react'

// composant layouts react
import Header from './Header'
import Footer from './Footer'

//styled component
import StyledGlobal from '../bases/StyledGlobal'

//LAYOUT APP

function App({ children }) {
  return (
    <React.Fragment>
      <StyledGlobal />
      <div className="container-page">
        <Header />
        <div className="main-content">{children}</div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App
