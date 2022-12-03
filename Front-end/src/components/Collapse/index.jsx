
import React, { useState, useRef } from "react"
import PropTypes from 'prop-types';

import contentPanel from "../../utils/dataPanel.js"

//styled component
import { StyledCollapseContainer, StyledPanel } from "./StyledCollapse"

function CollapseAbout({ children }) {
    const [key, setActiveKey] = useState(0)
    const [openPanel0, setPanel0] = useState(false)
    const [openPanel1, setPanel1] = useState(false)
    const [openPanel2, setPanel2] = useState(false)
    const [openPanel3, setPanel3] = useState(false)

    return (

        <StyledCollapseContainer accordion={false} >

            <StyledPanel

                key={0}
                value={0}
                arrow={openPanel0 ? "top-arrow" : "bottom-arrow"}
                header={contentPanel[0]["title"]}
                isActive={true}
                destroyInactivePanel={true}
                headerClass="my-header-class"
                className="title-collapse"
                showArrow={true}
                onClick={() => setPanel0(openPanel0 ? false : true)}
            >
                {contentPanel[0]["content"]}

            </StyledPanel>
            <StyledPanel

                key={1}
                value={1}
                arrow={openPanel1 ? "top-arrow" : "bottom-arrow"}
                header={contentPanel[1]["title"]}
                isActive={true}
                destroyInactivePanel={true}
                headerClass="my-header-class"
                className="title-collapse"
                showArrow={true}
                onClick={() => setPanel1(openPanel1 ? false : true)}
            >
                {contentPanel[1]["content"]}

            </StyledPanel>
            <StyledPanel

                key={2}
                value={2}
                arrow={openPanel2 ? "top-arrow" : "bottom-arrow"}
                header={contentPanel[2]["title"]}
                isActive={true}
                destroyInactivePanel={true}
                headerClass="my-header-class"
                className="title-collapse"
                showArrow={true}
                onClick={() => setPanel2(openPanel2 ? false : true)}
            >
                {contentPanel[2]["content"]}

            </StyledPanel>
            <StyledPanel

                key={3}
                value={3}
                arrow={openPanel3 ? "top-arrow" : "bottom-arrow"}
                header={contentPanel[3]["title"]}
                isActive={true}
                destroyInactivePanel={true}
                headerClass="my-header-class"
                className="title-collapse"
                showArrow={true}
                onClick={() => setPanel3(openPanel3 ? false : true)}
            >
                {contentPanel[3]["content"]}

            </StyledPanel>
        </StyledCollapseContainer >
    )

}

export default CollapseAbout
