import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import colors from "../../utils/colors"

const StyledPage404 = styled.main`
font-size: 288px;
color: ${colors.primary}.
font-weight: 700;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background: transparent;


min-height: 100vh;
& > div {
    font-family: MontSerratBold;
    margin-bottom: -12%;
}
span{
    font-size: 36px;
   
}
`

export default StyledPage404