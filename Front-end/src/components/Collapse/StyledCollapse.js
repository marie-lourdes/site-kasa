import styled from 'styled-components'
import devices_mediaQueries from '../../utils/responsive-design/devices.js'

//import Rc- collapse
import RcCollapse from 'rc-collapse'

import colors from '../../utils/colors'

const StyledCollapseContainer = styled(RcCollapse)`
  width: 85%;
  ${({ $collapseLocation }) =>
    $collapseLocation &&
    `
    width: 47%;
    margin-top: 2%;`};
  @media screen and ${devices_mediaQueries.mobile} {
    margin-top: 0;
    width: 100%;
  }
  @media screen and ${devices_mediaQueries.tablet} {
    margin-top: 0;
  }
`
const StyledPanel = styled(RcCollapse.Panel)`
  background: ${colors.backgroundMain};
  margin-bottom: 30px;
  position: relative;
  line-height: 1.5em;
  width: 100%;
  @media screen and ${devices_mediaQueries.mobile} {
    margin-bottom: 7%;
  }

  &,
  .my-header-class {
    border-radius: 5px;
  }

  .rc-collapse-content-box,
  .my-header-class {
    font-size: 1.5em;
  }
  .rc-collapse-content-box {
    line-height: 1.5em;
    padding: 27px 10px 0 15px;
    @media screen and ${devices_mediaQueries.mobile} {
      font-size: 0.8125em;
      padding-top: 20px;
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
      height: 30px;
      font-size: 0.8125em;
    }
  }

  .content-box {
    @media screen and ${devices_mediaQueries.mobile} {
      min-height: 150px;
    }
    ${({ $panelLocation }) =>
    $panelLocation &&
    `
    min-height: 215px;
    @media screen and ${devices_mediaQueries.mobile} {
      min-height: 100px;
    }
    `}
  }

  ${({ $panelLocation }) =>
    $panelLocation &&
    `
     width: 100%;
    .rc-collapse-content-box, .my-header-class {
        font-size: 1.125em;
        padding-left: 20px;
        @media screen and ${devices_mediaQueries.mobile} {
          font-size: 0.8125em;    
        }
    }`};

  /* css icon Font awesome arrowUp*/
  .rc-collapse-expand-icon {
    color: white;
    position: absolute;
    right: 10px;
    ${({ arrow }) => arrow === 'bottom-arrow' && `transform: rotate(180deg);`};
  }
`
export { StyledCollapseContainer, StyledPanel }
