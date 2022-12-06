import styled from "styled-components"
import colors from "../../utils/colors"
const StyledTag = styled.div`
font-size: 14px;
line-height: 142.6%;
background:${colors.primary};
padding: 3px 0 2px;
border-radius: 10px;
color: ${colors.secondary};
justify-content: center;
align-items: center;
display: flex;
margin-right:2%;
box-sizing: border-box;
white-space: nowrap;
width:30%;


`

const StyledTagContainer = styled.div`
display:flex;

align-items: center;
width: 100%;
box-sizing: border-box;

`

export { StyledTag, StyledTagContainer }