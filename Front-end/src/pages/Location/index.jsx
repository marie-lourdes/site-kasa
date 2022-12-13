import React from 'react'
import { useContext } from 'react'

// import PropTypes
import PropTypes from 'prop-types'

//import contexte-fetch
import { DataOneLocationContext } from '../../utils/contexte-fetch/DataOneLocationContext'

//Import du composant react carousel integrant le composant carousel de nuka-carousel stylisé par styled-components
import CarouselLocation from '../../components/CarouselLocation'

//import rate star Font-Awesome
import { RateStar } from '../../Atoms/Icons'

//import Collapse Location
import CollapseLocation from '../../components/Collapse/CollapseLocation'

//styled component
import StyledHeaderInfoLocation from './StyledLocation'
import { StyledTag, StyledTagContainer } from '../../Atoms/Tag/StyledTag.js'

function Location() {
  const {
    dataPictures,
    dataTitle,
    dataTag,
    dataRating,
    dataPosition,
    dataOwner,
    nameOwner,
    dataDescription,
    dataEquipments,
  } = useContext(DataOneLocationContext)

  /*affichage d un message d erreur dans le dom si il y a une erreur de chargement des données  lors de la recuperation des données de la fonction reqData de DataAllLocationProvider */
  /*L'erreur d id de propriété est géré par le catch et useNavigate dans le contexte fetch dataOneLocation*/
  if (!dataPictures ||
    !dataTitle ||
    !dataTag ||
    !dataRating ||
    !dataPosition ||
    !dataOwner ||
    !nameOwner ||
    !dataDescription ||
    !dataEquipments) {
    return <div className="error-loading-page error-loading-page--location ">Chargement en cours...nous nous excusons... <br /> Si l'erreur persiste tentez de raffaichir la page</div>
  }

  return (
    <React.Fragment>
      <CarouselLocation url={dataPictures && dataPictures}>
        {/* //verifier que les url de la propriété pictures ont bien été chargé par fetch en verifiant bien que datapictures contien ces valeurs urls */}
        {/* definition des children du composant Location qui s affichent dans le composant nuka-carousel*/}
        {dataPictures &&
          dataPictures.map((url) => (
            //titre alt avec l url slicé pour recuperer le numero de la photo
            <img
              key={`${url.slice(-5, -4)}`}
              src={url}
              alt={`photo de location-${url.slice(-5, -4)}`}
            />
          ))}
      </CarouselLocation>
      <main>
        <StyledHeaderInfoLocation
          dataTitle={dataTitle && dataTitle}
          dataPosition={dataPosition && dataPosition}
          dataTag={dataTag && dataTag}
          nameOwner={nameOwner && nameOwner}
          dataOwner={dataOwner?.pictures}
        >
          <div className="column-left-info-location">
            <div className="title-location"> {dataTitle && dataTitle}</div>
            <div>{dataPosition && dataPosition}</div>
            <StyledTagContainer>
              {dataTag &&
                dataTag.map((tag, index) => {
                  const tagLittle = tag.split('')
                  return (
                    <StyledTag
                      key={`${index}-${tag}`}
                      tagLittle={tagLittle.length <= 7}
                    >
                      {tag}
                    </StyledTag>
                  )
                })}
            </StyledTagContainer>
          </div>
          <div className="column-right-info-owner">
            {/*nom et prenom*/}
            <div className="info-owner">
              <div className="name-owner">
                <div>{nameOwner && nameOwner[0]}</div>
                <div>{nameOwner && nameOwner[1]}</div>
              </div>
              <div className="photo-owner">
                <img src={`${dataOwner?.picture && dataOwner.picture}`} />
              </div>
            </div>
            <div className="rating">
              <RateStar rating={dataRating && dataRating} />
            </div>
          </div>
        </StyledHeaderInfoLocation>
        <div className="collapse-location-row">
          <CollapseLocation
            dataDescription={dataDescription}
            dataEquipments={dataEquipments}
          />
        </div>
      </main>
    </React.Fragment>
  )
}

//verification des types de données recupéré par fetch dans le hook useEffect
StyledHeaderInfoLocation.propTypes = {
  dataTitle: PropTypes.string,
  dataPosition: PropTypes.string,
  dataTag: PropTypes.arrayOf(PropTypes.string),
  nameOwner: PropTypes.arrayOf(PropTypes.string),
  dataOwner: PropTypes.string,
}

export default Location
