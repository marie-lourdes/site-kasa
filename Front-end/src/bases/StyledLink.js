import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/colors'
import devices_mediaQueries from '../utils/responsive-design/devices.js'

const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  /* Lien maintenu active et sousligné*/
  ${({ $locationHome }) => $locationHome === "/" && `
  text-decoration: underline;  
  `
  };
  ${({ $locationAbout }) => $locationAbout === "/about" && `
  text-decoration: underline;  
   `
  };
 
  ${({ $link404 }) =>
    $link404 &&
    `
    font-size: 0.0625em;
    position: relative;
    bottom: 25px;
    &:active{
      text-decoration: underline;
    }
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
