import { createGlobalStyle } from "styled-components"
import MontserratFont from "../assets/fonts/Montserrat-Regular.ttf"
import colors from "../utils/colors"

const StyledGlobal = createGlobalStyle`

@font-face {
    font-family: "MontSerrat";
    src: url(${MontserratFont});
    font-style: normal;
}
*{
    margin:0;
}
body {
  
    font-family: MontSerrat, sans-serif;
    font-weight: 500;
    color: ${colors.primary};
    background: ${colors.secondary}
}
h1,h2,h2,h4,h5,h6 {
    color:${colors.secondary};
}
h1{
    font-size: 48px;
}
.container-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    max-width: 1240px;
}
.main-content{
    width: 100%;
}
main {
    min-height: 100vh;  
    border-radius: 25px;
    background: ${colors.backgroundMain};
    margin: 3% 0;
    display: flex;
    flex-direction: column;
    with: 100%;
    box-sizing: border-box;
  
}

ul {
    padding-left: 0;
    list-style: none;
}
`

export default StyledGlobal