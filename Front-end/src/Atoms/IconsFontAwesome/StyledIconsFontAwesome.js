import styled from "styled-components"
import colors from "../../utils/colors.js"
import devices_mediaQueries from "../../utils/responsive-design/devices.js"

const StyledIconsArrowUpFontAwesome = styled.i`
font-size: 1.2em;
@media screen and ${devices_mediaQueries.mobile} {
   
  
}
`
const StyledIconsArrowCarouselFontAwesome = styled.i`
font-size: 6em;
color: ${colors.secondary};
@media screen and ${devices_mediaQueries.mobile} {
   font-size: 2.1em;
}
`
const StyledRateStar = styled.i`
color:${({ rating, value }) => value <= rating ? `${colors.primary}` : ` #E3E3E3`};
font-size: 1.4em;
margin-left: 1%;
@media screen and ${devices_mediaQueries.mobile} {
    font-size: 0.9em; 
   
 }
`
export { StyledIconsArrowCarouselFontAwesome, StyledIconsArrowUpFontAwesome, StyledRateStar }