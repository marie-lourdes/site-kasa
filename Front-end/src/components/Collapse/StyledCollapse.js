import styled from "styled-components"
import devices_mediaQueries from "../../utils/responsive-design/devices.js"

//import Rc- collapse
import RcCollapse from "rc-collapse"

import colors from "../../utils/colors"


const StyledCollapseContainer = styled(RcCollapse)`
 width: 85%;


${({ $collapseLocation }) => $collapseLocation && `

width: 47%;
margin-top: 2%;`};
`
const StyledPanel = styled(RcCollapse.Panel)`
    background: ${colors.backgroundMain};
    margin-bottom: 30px;
    position: relative;
    line-height: 1.5em;

    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);


    &, .my-header-class {
        border-radius: 5px;
    }
    .rc-collapse-content-box, .my-header-class {
        font-size: 1.5em;
        @media screen and ${devices_mediaQueries.mobile}{
            font-size: 1em;   
    }
    }

.my-header-class {
    background: ${colors.primary};
    color: ${colors.secondary};
    height: 47px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    @media screen and ${devices_mediaQueries.mobile} {
    font-size: 0.813em;
    height: 30px;
    }

}

.rc-collapse-content-box {
    padding: 27px 10px 0 15px;
    line-height: 1.5em;
    @media screen and ${devices_mediaQueries.mobile} {
        font-size: 0.75em;
        padding-top: 20px;
      }
      
  
}
.content-box {
    @media screen and ${devices_mediaQueries.mobile} {
       padding-bottom: 50px;
     
    }
}
.content-box--description {
    padding-bottom: 35px;
}

${({ $panelLocation }) => $panelLocation && `
width: 100%;
.rc-collapse-content-box, .my-header-class {
    font-size: 0.75em;
    padding-left: 20px;
}`}

/* css icon Font awesome arrowUp*/
.rc-collapse-expand-icon {
    color: white;
    position: absolute;
    right: 10px;
   ${({ arrow }) => arrow === "bottom-arrow" && `transform: rotate(180deg);`};

}
`
export { StyledCollapseContainer, StyledPanel }