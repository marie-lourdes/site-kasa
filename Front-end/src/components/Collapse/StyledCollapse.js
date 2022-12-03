import styled from "styled-components"

//Rc- collapse
import RcCollapse, { Panel } from "rc-collapse"

import colors from "../../utils/colors"

const StyledCollapseContainer = styled(RcCollapse)`
 width: 85%;
`
const StyledPanel = styled(RcCollapse.Panel)`
background: ${colors.backgroundMain};
margin-bottom: 20px;
position: relative;
line-height: 1.5em;


width: 100%;
&, .my-header-class {
    border-radius: 5px;
}

.my-header-class {
    background:${colors.primary};
    color: ${colors.secondary};
    height: 47px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
   padding-left: 15px;
}
.rc-collapse-content-box{
    padding: 20px 10px 0 10px;
  
}


.rc-collapse-expand-icon {
    color: ${colors.backgroundBlack};
   
    line-height: 15px;
   font-size: 2em;
   color:white;
 
   position: absolute;
   right:10px;
   ${({ arrow, }) => arrow === "bottom-arrow" && `transform: rotate(180deg);`};
   ${({ arrow }) => arrow === "bottom-arrow" && `transform: rotate(180deg);`};
 
   &::before {
    content:"^"  
   }
}
`
export { StyledCollapseContainer, StyledPanel }