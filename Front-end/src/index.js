import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './layouts/App'
import reportWebVitals from './reportWebVitals'

//composants react du layout App
import Home from "./pages/Home"
import About from "./pages/About"
import Location from "./pages/Location"
import Page404 from "./pages/Page404"

//ROUTER ET ROUTES DU LAYOUT APP

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <App >
        {/* children*/}
        <div>
          {/*Ajouter la prop exact pour que home s affiche sur ce path exactement et non sur un path contenant "/" , 
    c'est a dire que home ne doit pas s afficher dans le path du composant Survey qui commence par "/"*/}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Location />} />
            <Route path="/location/:id" />
            <Route path="*" element={<Page404 />} />
          </Routes >
        </div>
      </App>
    </Router >
  </React.StrictMode >
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
