import { createGlobalStyle } from "styled-components"
import MontserratFont from "../assets/fonts/Montserrat-Regular.ttf"
import colors from "../utils/colors"

const StyledGlobal = createGlobalStyle`

@font-face {
    font-family: "MontSerrat";
    src: url(${MontserratFont});
    font-style: normal;
}
body {
   
    font-family: MontSerrat, sans-serif;
    font-weight: 500;
    color: ${colors.primary};
    margin: 0;
}
.container {
    display: flex;
    flex-direction: column;
    margin: 0 6%;
}
main {
    min-height: 100vh;  
    border-radius: 25px;
    background: ${colors.backgroundMain};
    margin: 40px 0;
    display: flex;
    flex-direction: column;
  
}

ul {
    padding-left: 0;
    list-style: none;
}
`

export default StyledGlobal