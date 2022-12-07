import styled from "styled-components"
import colors from "../utils/colors"
import bannerHome from "../assets/banner-home.png"
import bannerHome_S from "../assets/banner-home-s.png"
import bannerAbout from "../assets/banner-about.png"
import devices_mediaQueries from "../utils/responsive-design/devices.js"

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
background: ${({ $about }) => $about ? `url(${bannerAbout}) no-repeat` : `url(${bannerHome}) no-repeat`};
@media screen and ${devices_mediaQueries.mobile}{
    height: 111px;
    border-radius: 10px;
    background: ${({ $about }) => $about ? `url(${bannerAbout})` : `url(${bannerHome_S})`};
}

&::before {
    content: "";
    background-color:${colors.backgroundBlack};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
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
    height: 68px;
    @media screen and ${devices_mediaQueries.mobile}{
        top: 15%;
        left: 9.6%; 
        padding-right: 25%;   
    }
}
`
export default StyledBanner