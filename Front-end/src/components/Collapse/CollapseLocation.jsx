import React, { useState } from "react"
import contentPanel from "../../utils/dataPanelLocation"
import { ArrowUp } from "../../Atoms/IconsFontAwesome/index.jsx";

//styled component
import { StyledCollapseContainer, StyledPanel } from "../../components/Collapse/StyledCollapse"
function CollapseLocation() {

    const [openPanelLocation0, setPanelLocation0] = useState(false)
    const [openPanelLocation1, setPanelLocation1] = useState(false)
    return (
        <>
            <StyledCollapseContainer $collapseLocation accordion={false}>
                <StyledPanel
                    $panelLocation
                    key={0}
                    arrow={openPanelLocation0 ? "top-arrow" : "bottom-arrow"}
                    header={contentPanel[0]["title"]}
                    destroyInactivePanel={true}
                    expandIcon={ArrowUp}
                    headerClass="my-header-class"
                    className="title-collapse"
                    showArrow={true}
                    onClick={(e) => {
                        setPanelLocation0(openPanelLocation0 ? false : true)
                        e.stopPropagation()
                    }}>
                    {contentPanel[0]["content"]}
                </StyledPanel>
            </StyledCollapseContainer>
            <StyledCollapseContainer $collapseLocation accordion={false}>
                <StyledPanel $panelLocation $panelLocationEquipement key={1}
                    arrow={openPanelLocation1 ? "top-arrow" : "bottom-arrow"}
                    header={contentPanel[1]["title"]}
                    destroyInactivePanel={true}
                    expandIcon={ArrowUp}
                    headerClass="my-header-class"
                    className="title-collapse"
                    showArrow={true}
                    onClick={(e) => {
                        setPanelLocation1(openPanelLocation1 ? false : true)
                        e.stopPropagation()
                    }}>
                    <ul>
                        {contentPanel[1]["content"].map((listEquipement) =>
                            <li>{listEquipement}</li>
                        )}
                    </ul>

                </StyledPanel>


            </StyledCollapseContainer>
        </>
    )
}

export default CollapseLocation