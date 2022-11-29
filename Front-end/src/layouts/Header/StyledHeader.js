import styled from "styled-components"
import colors from "../../utils/colors"

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 68px;
padding-top: 40px;
nav {
    width: 300px;
    font-size: 24px;
   
   
}
nav ul{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
   
   
}
ul li {
   text-align: right;
   line-height: 142.6%;
   margin-left: 30px;
   color: ${colors.primary};
  
}

& > div {
    height: 68px
}

`
export default StyledHeader