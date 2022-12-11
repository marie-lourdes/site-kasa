import styled from 'styled-components'
import devices_mediaQueries from '../../utils/responsive-design/devices.js'

const StyledGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
  width: 100%;
  box-sizing: border-box;
  padding: 56px 0 20px 37px;
  @media screen and ${devices_mediaQueries.mobile} {
    padding: 0;
  }
  @media screen and ${devices_mediaQueries.tablet} {
    padding: 0;
  }
`
export default StyledGallery
