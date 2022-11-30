import styled from "styled-components"
import bannerHome from "../../assets/banner-home.png"

const StyledBanner = styled.div`
width: 100%;
border-radius: 25px;
height: 223px;
background: #000;
opacity: 0.3;
mix-blend-mode: darken;
background: url(${bannerHome}) no-repeat cover;

`

export default StyledBanner