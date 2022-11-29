import { createGlobalStyle } from "styled-components"
import colors from "./colors"

export const GlobalStyled = createGlobalStyle`
body {
    min-height: 100vh;  
    font-family: "Montserrat";
    font-weight: 500;
    color:${colors.primary};
}

#root {
    margin: 0px 100px;    
}

main {
    border-radius: 25px;
    background:${colors.backgroundMain};
}
`