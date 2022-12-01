import styled from "styled-components"
import colors from "../utils/colors"
import bannerHome from "../assets/banner-home.png"
const StyledBanner = styled.section`
width: 100%;
border-radius: 25px;
height: 223px;
box-sizing: border-box;
position: relative;
overflow: hidden;
margin-top: 5%;
display: flex;
justify-content: center;
box-sizing: border-box;
background: url(${bannerHome}) no-repeat;
&::before {
    content:"";
    background-color:${colors.backgroundBlack};
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    opacity: 0.3;
    mix-blend-mode: darken;
} 
 .title-home {
    position: absolute;
    color: white;
    z-index: 9999;
    top: 32%;
    left: 22.4%;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    height:68px;  
    
}
`
export default StyledBanner