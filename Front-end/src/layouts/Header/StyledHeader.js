import styled from 'styled-components'
import colors from '../../utils/colors'
import devices_mediaQueries from '../../utils/responsive-design/devices.js'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  width: 100%;
  padding-top: 40px;
  @media screen and ${devices_mediaQueries.mobile} {
    width: auto;
    padding-top: 5%;
    height: 50px;
  }
  & > .logo {
    @media screen and ${devices_mediaQueries.mobile} {
      flex: 1;
    }

    img {
      height: 65px;
      @media screen and ${devices_mediaQueries.mobile} {
        height: 45px;
      }
    }
  }
  nav {
    width: 300px;
    font-size: 1.5em;
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
    @media screen and ${devices_mediaQueries.mobile} {
      text-transform: uppercase;
      font-size: 0.75em;
      flex: 1;
      justify-content: space-between;
      height: 41px;
    }
    @media screen and ${devices_mediaQueries.tablet} {
      text-transform: uppercase;
      font-size: 1.3em;
      flex: 1;
    }
  }
  nav ul {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    @media screen and ${devices_mediaQueries.mobile} {
      padding-top: 2%;
      align-items: center;
    }
  }
  ul li {
    text-align: right;
    line-height: 142.6%;
    margin-left: 50px;
    color: ${colors.primary};
    @media screen and ${devices_mediaQueries.mobile} {
      margin-left: 10%;
    }
  }
`
export default StyledHeader
