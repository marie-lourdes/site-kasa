import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'
import devices_mediaQueries from '../../utils/responsive-design/devices.js'

const StyledLinkCard = styled(Link)`
  width: 30%;
  height: 340px;
  max-width: 340px;
  margin: 0 2% 4%;
  display: flex;
  text-decoration: none;
  @media screen and ${devices_mediaQueries.mobile} {
    width: 100%;
    height: 255px;
    max-width: 335px;
    margin: 0 0 5%;
  }
  @media screen and ${devices_mediaQueries.mobile_landscape} {
    max-width: 100%;
  }
  @media screen and ${devices_mediaQueries.tablet} {
    min-width: 45%;
    max-width: 45%;
    margin: 0 2.5% 4.5%;
  }

  .error-data-card {
    color: ${colors.primary};
  }
`

const StyledCardLocation = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  background: ${colors.primary};
  border-radius: 10px;
  align-items: flex-end;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    min-height: 340px;
    max-height: 340px;
  }

  &::after {
    content: '';
    position: absolute;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  h4 {
    width: 29%;
    padding: 10px;
    font-size: 0.875em;
    position: absolute;
    z-index: 9999;
    width: 50%;
    box-sizing: border-box;
    line-height: 1.5em;
    @media screen and ${devices_mediaQueries.mobile} {
      padding-left: 6%;
      width: 55%;
    }
    @media screen and ${devices_mediaQueries.tablet} {
      font-size: 1.1em;
      width: 70%;
    }
  }
`
export { StyledCardLocation, StyledLinkCard }
