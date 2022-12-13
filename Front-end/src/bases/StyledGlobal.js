import { createGlobalStyle } from 'styled-components'
import MontserratFontBold from '../assets/fonts/Montserrat-ExtraBold.ttf'
import MontserratFont from '../assets/fonts/Montserrat-Regular.ttf'
import colors from '../utils/colors'
import devices_mediaQueries from '../utils/responsive-design/devices.js'

const StyledGlobal = createGlobalStyle`
@font-face {
    font-family: MontSerrat;
    src: url(${MontserratFont});
    font-style: normal;
}

@font-face {
    font-family: MontSerratBold;
    src: url(${MontserratFontBold});
    font-style: normal;
}

* {
    margin: 0;
}

body {
    font-family: MontSerrat, sans-serif;
    font-weight: 500;
    color: ${colors.primary};
    background: ${colors.secondary}  
}

h1, h2, h2, h4, h5, h6 {
    color:${colors.secondary};
}

h1, h4 {
    font-weight: 500;
}

h1{
    font-size: 3em;
     @media screen and ${devices_mediaQueries.mobile} {
        font-size:1.5em;   
    }
    @media screen and ${devices_mediaQueries.tablet} {
       font-size:2.1em;
    }
}

button {
    background: transparent;
    border: 0;
}

.container-page {
    display: flex;
    flex-direction: column;
    width: 100 %;
    margin: 0 auto;
    max-width: 1240px;
    @media screen and ${devices_mediaQueries.mobile} {
        width: auto;
        padding: 0 5%;
    }
    @media screen and ${devices_mediaQueries.tablet} {
        width: auto;
        padding: 0 5%;
    }
}

.main-content {
    width: 100%;
    min-height: 100vh;
    @media screen and ${devices_mediaQueries.mobile} {
        width: auto;
    }
}

main {
    margin: 3% 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    position: relative;
   @media screen and ${devices_mediaQueries.mobile} {
        width: auto;
        margin: 6% 0;          
    }
    @media screen and ${devices_mediaQueries.tablet} {
        width: auto;
        margin: 6% 0;      
    }
}

main.main-Home-page {
    border-radius: 25px;
    background: ${colors.backgroundMain};
    @media screen and ${devices_mediaQueries.mobile} {
      background: transparent;
      border-radius: 0;
    }
    @media screen and ${devices_mediaQueries.tablet} {
        background: transparent;
        border-radius: 0;
    }
}

ul {
    padding-left: 0;
    list-style: none;
}

.error-loading-page {
    position: absolute;
    top: 50%;
    left: 40%;
    font-size: 1.5em;
    @media screen and ${devices_mediaQueries.mobile} {
        top: 50%;
        left: 20%;
        font-size: 1em;   
    }
    @media screen and ${devices_mediaQueries.mobile_landscape} {
        left: 35%;
        top: 10%;
    }
    @media screen and ${devices_mediaQueries.tablet} {
       left: 30%;
       top: 10%;
    } 
    &--location {
        left: 30%;
        @media screen and ${devices_mediaQueries.mobile} {
            left: 10%;
            top: 40%;
            font-size: 1em;   
        }
        @media screen and ${devices_mediaQueries.mobile_landscape} {
            left: 25%;
            top: 55%;
        }
        @media screen and ${devices_mediaQueries.tablet} {
            left: 15%;
            top: 50%;
         }
      
    }  
}
`
export default StyledGlobal
