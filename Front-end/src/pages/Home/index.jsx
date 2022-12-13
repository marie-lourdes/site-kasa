import React from 'react'
import CardLocation from '../../components/CardLocation'
import { useContext } from 'react'

import { DataAllLocationsContext } from '../../utils/contexte-fetch/DataAllLocationsContext'
import { StyledLinkCard } from '../../components/CardLocation/StyledCardLocation.js'
//style component
import StyledGallery from './StyledHome.js'
import StyledBanner from '../../layouts/StyledBanner.js'

function Home() {
  const { data, error } = useContext(DataAllLocationsContext)
  const locationData = data
  {/*affichage d un message d erreur dans le dom si catch recupere une erreur lors de la recuperation des données de la fonction reqData de DataAllLocationProvider */ }
  if (error) return <div className="error-loading-page">Une erreur est survenue...</div>
  return (
    <React.Fragment>
      <StyledBanner>
        <div className="title-home">
          <h1> Chez vous, partout et ailleurs</h1>
        </div>
      </StyledBanner>
      <main className="main-Home-page">
        <StyledGallery className="Gallery">
          {locationData.map(({ id, title, cover }) => (
            <StyledLinkCard to={`location/${id}`} key={id}>
              <CardLocation title={title} cover={cover} />
            </StyledLinkCard>
          ))}
        </StyledGallery>
      </main>
    </React.Fragment>
  )
}

export default Home
