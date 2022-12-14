import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/colors'
import devices_mediaQueries from '../utils/responsive-design/devices.js'

const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  ${({ $activeLinkHome, $locationHome }) => $activeLinkHome === "is-active" && $locationHome === "/" && `
  text-decoration: underline;  
  `
  };
  ${({ $activeLinkAbout, $location }) => $activeLinkAbout === "is-active" && $location === "/about" && `

  text-decoration: underline;  
  `
  };
 

@media screen and ${devices_mediaQueries.mobile} {
    &: hover,&:active {
    text - decoration: underline;
  }
}
@media screen and ${devices_mediaQueries.tablet} {      
      &: hover,&:active {
    text - decoration: underline;
  }
}


  ${({ $link404 }) =>
    $link404 &&
    `
    font-size: 0.0625em;
    position: relative;
    bottom: 25px;
    @media screen and ${devices_mediaQueries.mobile} {
        bottom: 200px; 
        font-size: 0.146em;
    }
    @media screen and ${devices_mediaQueries.mobile_landscape} {      
        bottom: 30px;
    }
    @media screen and ${devices_mediaQueries.tablet} {      
        font-size: 0.09em;
    }`};


`
export default StyledLink
