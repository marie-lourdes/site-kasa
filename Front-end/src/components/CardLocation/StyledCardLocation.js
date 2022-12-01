import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../utils/colors"

const StyledCardLocation = styled.div`

box-sizing: border-box;
width: 100%;
background:${colors.primary};
padding: 20px;
border-radius: 15px;
li {
    width: 100%;
}
`
const StyledLinkCard = styled(Link)`
width:30%;
height:340px;
max-width: 340px;
margin: 0 2.5%  5%;
display: flex;
align-items: flex-end;
`

export { StyledCardLocation, StyledLinkCard }