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
                    $panelLocationDescription
                    key={0}
                    arrow={openPanelLocation0 ? "top-arrow" : "bottom-arrow"}
                    header={contentPanel[0]["title"]}
                    destroyInactivePanel={true}
                    expandIcon={ArrowUp}
                    headerClass="my-header-class"
                    className="title-collapse"
                    showArrow={true}
                    onClick={() => {
                        setPanelLocation0(openPanelLocation0 ? false : true)

                    }}>
                    <div className="content-box content-box--padding">
                        {contentPanel[0]["content"]}
                    </div>
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
                    onClick={() => {
                        setPanelLocation1(openPanelLocation1 ? false : true)

                    }}>
                    <div className="content-box">
                        <ul>
                            {contentPanel[1]["content"].map((listEquipement) =>
                                <li>{listEquipement}</li>
                            )}
                        </ul>
                    </div>

                </StyledPanel>


            </StyledCollapseContainer>
        </>
    )
}

export default CollapseLocation