import styled from "styled-components"
import colors from "../../utils/colors"

const StyledFooter = styled.footer`
height: 200px;
display: flex;
justify-content: center;
align-items: center;
color:${colors.secondary};
background: ${colors.backgroundFooter};
.footer-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
   & > div {
     margin-bottom: 20px;
   }
    
}
`

export default StyledFooter