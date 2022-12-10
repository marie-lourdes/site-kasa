import styled from "styled-components";
//import du composant carousel de nuka-carousel
import Carousel from "nuka-carousel"

import colors from "../../utils/colors"
import devices_mediaQueries from "../../utils/responsive-design/devices.js"

const StyledCarousel = styled.div`
/*slide-frame*/
    margin-top: 1.8%;
    border-radius: 25px;
    max-height: 415px;
    mix-blend-mode: normal;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;
    width: 100%;
  
    
`
const StyledArrowButton = styled.button`
    position: absolute;
    top: 40%;
    z-index:9999;
  
    ${({ arrow }) => arrow === "left" ? `left: 0.6%` : ` right: 0.6%`};
    @media screen and ${devices_mediaQueries.mobile} {
      top:45%;
    }
    `
const StyledItem = styled.img`
  max-height: 415px;
  min-height: 415px;
  object-fit: cover;
  object-position: center 50%;
  min-width:100%;
  max-width: 100%;
  transition: transform 50ms ease-in;
  overflow: hidden;
  ${({ transformImg, }) => transformImg && ` transform: translateX(-${transformImg}%)`};
 
 
  @media screen and ${devices_mediaQueries.mobile} {
    max-height: 255px;
    min-height: 255px; 
  }       

`
const StyledSlideCount = styled.div`
    color: ${colors.secondary};
    position: absolute;
    bottom: 10%;
    left: 50%;
    z-index: 9999;
    /*le composant ne s affiche pas sur mobile et tablet*/
    @media screen and ${devices_mediaQueries.mobile} {
      display: none;
    } 
    @media screen and ${devices_mediaQueries.tablet} {
      display: none;
    } 
 `

export { StyledCarousel, StyledSlideCount, StyledItem, StyledArrowButton }