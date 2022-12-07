import styled from "styled-components"
import colors from "../../utils/colors.js"

const StyledIconsArrowCarouselFontAwesome = styled.i`
font-size: 79.2px;
color: ${colors.secondary};
`
const StyledRateStar = styled.i`
color:${({ rating, value }) => value <= rating ? `${colors.primary}` : ` #E3E3E3`};
font-size: 1.4em;
margin-left: 1%;
`
export { StyledIconsArrowCarouselFontAwesome, StyledRateStar }