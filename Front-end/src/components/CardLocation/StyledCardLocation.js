import styled from "styled-components"
import colors from "../../utils/colors"

const StyledCardLocation = styled.div`
width:30%;
height:340px;
box-sizing: border-box;
max-width: 340px;
background:${colors.primary};
display: flex;
margin: 0 2.5%  5%;
padding: 20px;
border-radius: 15px;
align-items: flex-end;
li {
    width: 100%;
}
`

export default StyledCardLocation