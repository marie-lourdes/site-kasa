import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../utils/colors"

const StyledLinkCard = styled(Link)`
width:30%;
height:340px;
max-width: 340px;
margin: 0 2.5%  5%;
display: flex;
text-decoration:none;
.error-data-card{
    color: ${colors.primary}
}
`

const StyledCardLocation = styled.div`
display: flex;
box-sizing: border-box;
width: 100%;
background: ${colors.primary};
border-radius: 10px;
align-items: flex-end;
position: relative;
overflow: hidden;
img{
    object-fit: cover;
    width: 100%;
    min-height: 340px;
    max-height: 340px;
   
}
&::after {
    content: "";
    position: absolute;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
h4 {
    width: 100%;
    line-height: 142.6%;
    padding: 18px;
    font-size: 14px;
    position: absolute;
    z-index: 9999;

}
`
export { StyledCardLocation, StyledLinkCard }