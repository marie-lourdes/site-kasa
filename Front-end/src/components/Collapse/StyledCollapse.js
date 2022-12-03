import styled from "styled-components"
//import icon styled components
import { ArrowIosUpward } from '@styled-icons/evaicons-solid/ArrowIosUpward'

import FontAwesome from "../FontAwesome";
//Rc- collapse
import RcCollapse, { Panel } from "rc-collapse"

import colors from "../../utils/colors"

const IconArrow = styled(ArrowIosUpward)`
  color: ${colors.secondary};

 
`
console.log("IconArrow", IconArrow)


const StyledCollapseContainer = styled(RcCollapse)`
 width: 85%;
`
const StyledPanel = styled(RcCollapse.Panel)`
background: ${colors.backgroundMain};
margin-bottom: 20px;
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
    padding: 20px 10px 0 15px;
  
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