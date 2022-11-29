import { createGlobalStyle } from "styled-components"
import MontserratFont from "../assets/fonts/Montserrat-Regular.ttf"
import colors from "../utils/colors"

export const StyledGlobal = createGlobalStyle`

@font-face {
    font-family: "MontSerrat";
    src: url(${MontserratFont});
    font-style: normal;
   }
body {
    min-height: 100vh;  
    font-family: MontSerrat, sans-serif;
    font-weight: 500;
    color: ${colors.primary};
}

#root {
    margin: 0px 100px;    
}

main {
    border-radius: 25px;
    background: ${colors.backgroundMain};
}

ul {
    padding-left: 0;
    list-style: none;
}
`