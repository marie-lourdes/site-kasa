import { createGlobalStyle } from "styled-components"
import MontserratFontBold from "../assets/fonts/Montserrat-ExtraBold.ttf"
import MontserratFont from "../assets/fonts/Montserrat-Regular.ttf"
import colors from "../utils/colors"

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

h1{
    font-size: 48px;
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
}

.main-content {
    width: 100%;
}

main {
    border-radius: 25px;
    background: ${colors.backgroundMain};
    margin: 3% 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;

}

ul {
    padding-left: 0;
    list-style: none;
}
`
export default StyledGlobal