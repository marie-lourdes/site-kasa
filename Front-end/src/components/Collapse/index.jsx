
import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types';
import FontAwesome from "../FontAwesome/index.jsx";

import contentPanel from "../../utils/dataPanel.js"

//styled component
import { StyledCollapseContainer, StyledPanel } from "./StyledCollapse"


function CollapseAbout({ children }) {
    const [key, setActiveKey] = useState(0)
    const [openPanel0, setPanel0] = useState(true)
    const [openPanel1, setPanel1] = useState(false)
    const [openPanel2, setPanel2] = useState(false)
    const [openPanel3, setPanel3] = useState(false)
    useEffect(() => {
        return setActiveKey(1)

    }, [openPanel0, openPanel2, openPanel3])


    return (
        <StyledCollapseContainer accordion={false} activeKey={key}  >
            <StyledPanel
                key={0}
                arrow={openPanel0 ? "top-arrow" : "bottom-arrow"}
                header={contentPanel[0]["title"]}
                destroyInactivePanel={true}
                expandIcon={FontAwesome}
                headerClass="my-header-class"
                className="title-collapse"
                showArrow={true}
                onClick={() => setPanel0(openPanel0 ? false : true)}
            >
                {contentPanel[0]["content"]}
            </StyledPanel>

            <StyledPanel
                key={1}
                destroyInactivePanel={true}
                arrow={openPanel1 ? "top-arrow" : "bottom-arrow"}
                header={contentPanel[1]["title"]}
                expandIcon={FontAwesome}
                headerClass="my-header-class"
                className="title-collapse"
                showArrow={true}
                onClick={() => setPanel1(openPanel1 ? false : true)}


            >
                {contentPanel[1]["content"]}

            </StyledPanel>

            <StyledPanel
                key={2}
                arrow={openPanel2 ? "top-arrow" : "bottom-arrow"}
                header={contentPanel[2]["title"]}
                isActive={true}
                destroyInactivePanel={true}
                expandIcon={FontAwesome}
                headerClass="my-header-class"
                className="title-collapse"
                showArrow={true}
                onClick={() => setPanel2(openPanel2 ? false : true)}
            >
                {contentPanel[2]["content"]}

            </StyledPanel>

            <StyledPanel
                key={3}
                arrow={openPanel3 ? "top-arrow" : "bottom-arrow"}
                header={contentPanel[3]["title"]}
                isActive={true}
                destroyInactivePanel={true}
                expandIcon={FontAwesome}
                headerClass="my-header-class"
                className="title-collapse"
                showArrow={true}
                onClick={() => setPanel3(openPanel3 ? false : true)}
            >
                {contentPanel[3]["content"]}

            </StyledPanel>
        </StyledCollapseContainer >
    )
    function desactiveKey() {
        setActiveKey(0)

    }

}

export default CollapseAbout
