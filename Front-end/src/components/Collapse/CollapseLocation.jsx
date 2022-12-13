import React, { useState } from 'react'
import { ArrowUp } from '../../Atoms/Icons'
// import PropTypes
import PropTypes from 'prop-types'
//styled component
import {
  StyledCollapseContainer,
  StyledPanel,
} from '../../components/Collapse/StyledCollapse'
function CollapseLocation({ dataDescription, dataEquipments }) {
  const [openPanelLocation0, setPanelLocation0] = useState(false)
  const [openPanelLocation1, setPanelLocation1] = useState(false)
  return (
    <>
      <StyledCollapseContainer $collapseLocation accordion={false}>
        <StyledPanel
          $panelLocation
          $panelLocationDescription
          key={0}
          arrow={openPanelLocation0 ? 'top-arrow' : 'bottom-arrow'}
          header="Description"
          destroyInactivePanel={true}
          expandIcon={ArrowUp}
          headerClass="my-header-class"
          className="title-collapse"
          showArrow={true}
          onClick={() => {
            setPanelLocation0(openPanelLocation0 ? false : true)
          }}
        >
          <div className="content-box">{dataDescription}</div>
        </StyledPanel>
      </StyledCollapseContainer>
      <StyledCollapseContainer $collapseLocation accordion={false}>
        <StyledPanel
          $panelLocation
          $panelLocationEquipement
          key={1}
          arrow={openPanelLocation1 ? 'top-arrow' : 'bottom-arrow'}
          header="Équipements"
          destroyInactivePanel={true}
          expandIcon={ArrowUp}
          headerClass="my-header-class"
          className="title-collapse"
          showArrow={true}
          onClick={() => {
            setPanelLocation1(openPanelLocation1 ? false : true)
          }}
        >
          <div className="content-box">
            <ul>
              {dataEquipments &&
                dataEquipments.map((listEquipement, index) => (
                  <li key={`${index}-${listEquipement}`}>{listEquipement}</li>
                ))}
            </ul>
          </div>
        </StyledPanel>
      </StyledCollapseContainer>
    </>
  )
}

CollapseLocation.propTypes = {
  dataDescription: PropTypes.string,
  dataEquipments: PropTypes.arrayOf(PropTypes.string),
}

export default CollapseLocation
