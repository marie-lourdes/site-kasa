import React, { useState, useEffect } from 'react'
import { ArrowUp } from '../../Atoms/Icons'
import contentPanel from '../../utils/dataPanelAbout.js'

//styled component
import { StyledCollapseContainer, StyledPanel } from './StyledCollapse'

function CollapseAbout() {
  const [key, setActiveKey] = useState(0)
  const [openPanel0, setPanel0] = useState(false)
  const [openPanel1, setPanel1] = useState(true)
  const [openPanel2, setPanel2] = useState(false)
  const [openPanel3, setPanel3] = useState(false)
  useEffect(() => {
    return setActiveKey(1)
  }, [])

  return (
    <StyledCollapseContainer
      accordion={false}
      activeKey={key}
      onChange={(key) => {
        setActiveKey(key)
      }}
    >
      <StyledPanel
        key={0}
        arrow={openPanel0 ? 'top-arrow' : 'bottom-arrow'}
        header={contentPanel[0]['title']}
        destroyInactivePanel={true}
        expandIcon={ArrowUp}
        headerClass="my-header-class"
        className="title-collapse"
        showArrow={true}
        onClick={(e) => {
          setPanel0(openPanel0 ? false : true)
        }}
      >
        <div className="content-box ">{contentPanel[0]['content']}</div>
      </StyledPanel>

      <StyledPanel
        key={1}
        arrow={openPanel1 ? 'top-arrow' : 'bottom-arrow'}
        header={contentPanel[1]['title']}
        expandIcon={ArrowUp}
        headerClass="my-header-class"
        className="title-collapse"
        showArrow={true}
        destroyInactivePanel={true}
        onClick={(e) => {
          setPanel1(openPanel1 ? false : true)
        }}
      >
        <div className="content-box ">{contentPanel[1]['content']}</div>
      </StyledPanel>

      <StyledPanel
        key={2}
        arrow={openPanel2 ? 'top-arrow' : 'bottom-arrow'}
        header={contentPanel[2]['title']}
        isActive={true}
        destroyInactivePanel={true}
        expandIcon={ArrowUp}
        headerClass="my-header-class"
        className="title-collapse"
        showArrow={true}
        onClick={(e) => {
          setPanel2(openPanel2 ? false : true)
        }}
      >
        <div className="content-box ">{contentPanel[2]['content']}</div>
      </StyledPanel>

      <StyledPanel
        key={3}
        arrow={openPanel3 ? 'top-arrow' : 'bottom-arrow'}
        header={contentPanel[3]['title']}
        isActive={true}
        destroyInactivePanel={true}
        expandIcon={ArrowUp}
        headerClass="my-header-class"
        className="title-collapse"
        showArrow={true}
        onClick={(e) => {
          setPanel3(openPanel3 ? false : true)
        }}
      >
        <div className="content-box ">{contentPanel[3]['content']}</div>
      </StyledPanel>
    </StyledCollapseContainer>
  )
}

export default CollapseAbout
