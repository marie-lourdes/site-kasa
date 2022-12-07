import styled from "styled-components"
import colors from "../../utils/colors"
import devices_mediaQueries from "../../utils/responsive-design/devices.js"
const StyledTag = styled.div`
font-size: 0.875em;
background:${colors.primary};
padding: 3px 0 2px;
border-radius: 10px;
color: ${colors.secondary};
justify-content: center;
align-items: flex-end;
display: flex;
margin-right: 2%;
box-sizing: border-box;
white-space: nowrap;
width: 22%;
@media screen and ${devices_mediaQueries.mobile} {
   font-size: 0.625em; 
   padding: 2.16px 29px 1.84px;
   border-radius: 5px;
}

`
const StyledTagContainer = styled.div`
display:flex;
align-items: center;
width: 100%;
box-sizing: border-box;
`
export { StyledTag, StyledTagContainer }