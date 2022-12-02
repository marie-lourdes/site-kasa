import styled from "styled-components"

//Rc- collapse
import Collapse, { Panel } from "rc-collapse"

import colors from "../../utils/colors"

const StyledCollapseContainer = styled(Collapse)`
 width: 80%;
`
const StyledPanel = styled(Panel)`
background: ${colors.backgroundMain};
margin-bottom: 20px;
position: relative;

width: 100%;
&, .my-header-class {
    border-radius: 5px;
}

.my-header-class {
    background:${colors.primary};
    color: ${colors.secondary};
    height: 47px;
    cursor: pointer;
   line-height: 47px;
}

.rc-collapse-expand-icon i.arrow {
    color: ${colors.backgroundBlack};
    position: absolute;
    right:10px;
    z-index:9999;
    line-height: 47 px;
   font-size: 2em;
   color:white;
   ${({ arrow }) => arrow === "bottom-arrow" ? `  transform: rotate(180deg);` : `  transform: rotate(0deg);`}
   &::before {
    content:"^"  
   }
}
`
export { StyledCollapseContainer, StyledPanel }