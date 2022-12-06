import React, { useState } from "react"
import contentPanel from "../../utils/dataPanelLocation"
import { ArrowUp } from "../../Atoms/IconsFontAwesome/index.jsx";

//styled component
import { StyledCollapseContainer, StyledPanel } from "../../components/Collapse/StyledCollapse"
function CollapseLocation() {
    const [key, setActiveKey] = useState(0)
    const [openPanel0, setPanel0] = useState(false)
    const [openPanel1, setPanel1] = useState(false)
    return (
        <StyledCollapseContainer $collapseLocation accordion={false}>
            <StyledPanel
                key={0}
                arrow={openPanel0 ? "top-arrow" : "bottom-arrow"}
                header={contentPanel[0]["title"]}
                destroyInactivePanel={true}
                expandIcon={ArrowUp}
                headerClass="my-header-class"
                className="title-collapse"
                showArrow={true}
                onClick={() => setPanel0(openPanel0 ? false : true)}>
                {contentPanel[0]["content"]}
            </StyledPanel>
            <StyledPanel
                key={1}
                arrow={openPanel1 ? "top-arrow" : "bottom-arrow"}
                header={contentPanel[1]["title"]}
                destroyInactivePanel={true}
                expandIcon={ArrowUp}
                headerClass="my-header-class"
                className="title-collapse"
                showArrow={true}
                onClick={() => setPanel1(openPanel1 ? false : true)}>
                {contentPanel[1]["content"]}
            </StyledPanel>


        </StyledCollapseContainer>
    )
}

export default CollapseLocation