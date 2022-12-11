import styled from 'styled-components'
//import du composant carousel de nuka-carousel
import Carousel from 'nuka-carousel'

import colors from '../../utils/colors'
import devices_mediaQueries from '../../utils/responsive-design/devices.js'

const StyledCarousel = styled(Carousel)`
  /*slide-frame*/
  margin-top: 1.8%;
  border-radius: 25px;
  max-height: 415px;
  mix-blend-mode: normal;
  overflow: hidden;

  /*slide-list*/
  .slide img {
    /* definition de la hauteur pour redefinir sa position dans le frame*/
    max-height: 415px;
    min-height: 415px;
    object-fit: cover;
    object-position: center 50%;
    width: 100%;
    @media screen and ${devices_mediaQueries.mobile} {
      max-height: 255px;
      min-height: 255px;
    }
  }
`

const StyledSlideCount = styled.div`
  color: ${colors.secondary};
  position: relative;
  bottom: 25px;
  /*le composant ne s affiche pas sur mobile et tablet*/
  @media screen and ${devices_mediaQueries.mobile} {
    display: none;
  }
  @media screen and ${devices_mediaQueries.tablet} {
    display: none;
  }
`

export { StyledCarousel, StyledSlideCount }
