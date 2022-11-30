import styled from "styled-components"
import colors from "../../utils/colors"

const StyledBanner = styled.div`
width: 100%;
background:${colors.backgroundBlack};
position: absolute;
top:0;
left:0;
bottom:0;
right:0;

opacity: 0.3;
mix-blend-mode: darken;

`

export default StyledBanner