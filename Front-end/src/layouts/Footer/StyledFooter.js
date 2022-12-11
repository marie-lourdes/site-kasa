import styled from 'styled-components'
import colors from '../../utils/colors'
import devices_mediaQueries from '../../utils/responsive-design/devices.js'

const StyledFooter = styled.footer`
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${colors.secondary};
  background: ${colors.backgroundBlack};
  @media screen and ${devices_mediaQueries.mobile} {
    align-items: center;
  }

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0 30px;
    font-size: 24px;
    @media screen and ${devices_mediaQueries.mobile} {
      font-size: 80%;
      padding: 0;
    }

    & > .logo-footer {
      margin-bottom: 30px;
      height: 40px;
    }
  }
`

export default StyledFooter
