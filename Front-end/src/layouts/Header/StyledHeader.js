import styled from "styled-components"
import colors from "../../utils/colors"

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 68px;
padding-top: 40px;
margin: 0 6%;
& > div {
    height: 68px
}
nav {
    width: 300px;
    font-size: 24px; 
    display: flex;
    justify-content: flex-end; 
}
nav ul{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;  
}
ul li {
   text-align: right;
   line-height: 142.6%;
   margin-left: 50px;
   color: ${colors.primary}; 
}



`
export default StyledHeader