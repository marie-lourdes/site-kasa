import styled from "styled-components"

//import Rc- collapse
import RcCollapse from "rc-collapse"

import colors from "../../utils/colors"

const StyledCollapseContainer = styled(RcCollapse)`
 width: 85%;
`
const StyledPanel = styled(RcCollapse.Panel)`
background: ${colors.backgroundMain};
margin-bottom: 30px;
position: relative;
line-height: 1.5em;
font-size: 1.5em;
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
    padding: 27px 10px 0 15px;
     
}

.rc-collapse-expand-icon{
    color: ${colors.backgroundBlack};
    color:white;
    position: absolute;
    right:10px;
   ${({ arrow }) => arrow === "bottom-arrow" && `transform: rotate(180deg);`}; 
   
}
`
export { StyledCollapseContainer, StyledPanel }