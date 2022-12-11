import styled from 'styled-components'
import colors from '../../utils/colors'
import devices_mediaQueries from '../../utils/responsive-design/devices.js'

const StyledPage404 = styled.main`
    font-size: 18em;
    color: ${colors.primary}.
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: transparent;
    min-height: 100vh;
    position: relative;
    @media screen and ${devices_mediaQueries.mobile} {
        font-size: 6em;
        top: 50px;
    }
  
    & > div {
        font-family: MontSerratBold;
        margin-bottom: -12%;       
    }
    
    span {
        font-size: 0.125em;
        font-weight: bold;
        position: relative;
        bottom: 5px;
    /* white space with span block */
        @media screen and ${devices_mediaQueries.mobile} {
            font-size: 0.1875em;
            display: block;
            text-align: center;
            bottom: 130px;
            .indent {
                display: block:
                width:10px;
            }
        } 
        @media screen and ${devices_mediaQueries.mobile_landscape} {
            bottom: 10px;
        }  
    }
`

export default StyledPage404
