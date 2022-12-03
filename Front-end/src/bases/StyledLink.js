import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../utils/colors"

const StyledLink = styled(Link)`
color:${colors.primary};
text-decoration: none;
${({ $link404 }) => $link404 && `font-size: 18px`};
&:hover {
    text-decoration: underline;
}
`
export default StyledLink