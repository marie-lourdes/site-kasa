import styled from "styled-components"
import colors from "../../utils/colors"
const StyledTag = styled.div`
font-size: 14px;
line-height: 142.6%;
background:${colors.primary};
padding: 3px 40px 2px;
border-radius: 10px;
color: ${colors.secondary};
justify-content: center;
align-items: center;
display: flex;
margin-right:5%;
flex:1;
box-sizing: border-box;
white-space: nowrap;

`

const StyledTagContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 50%;
box-sizing: border-box;

`

export { StyledTag, StyledTagContainer }