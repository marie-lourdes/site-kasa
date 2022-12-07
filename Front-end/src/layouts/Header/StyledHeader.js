import styled from "styled-components"
import colors from "../../utils/colors"
import devices_mediaQueries from "../../utils/responsive-design/devices.js"

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 68px;
width: 100%;
padding-top: 40px;
@media screen and ${devices_mediaQueries.mobile}{
    width: auto;
}
& > .logo {
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