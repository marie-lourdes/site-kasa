import styled from "styled-components"
import colors from "../../utils/colors"

const StyledFooter = styled.footer`
box-sizing: border-box;
height: 200px;
width: 100%;
display: flex;
justify-content: center;
align-items: flex-end;
color:${colors.secondary};
background: ${colors.backgroundBlack};
.footer-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0 30px;
    font-size: 24px;
   & > div {
     margin-bottom: 30px;
     height: 40px;
   }
    
}
`

export default StyledFooter