
import { useState } from "react"

import contentPanel from "../../utils/dataPanel.js"

//styled component
import { StyledCollapseContainer, StyledPanel } from "./StyledCollapse"



function CollapseAbout() {
    const [key, setActiveKey] = useState(0)
    const [panel, setPanel] = useState(false)
    console.log("key", key)
    console.log("panel", panel)

    return (

        <StyledCollapseContainer accordion={false} value={panel}>

            {
                contentPanel.map(({ title, content }, index) =>
                    <StyledPanel Key={`${key}`}
                        value={panel} arrow={key === 0 ? "bottom-arrow" : "top-arrow"}
                        collapsible={key === 0 && `disabled`}
                        header={title} headerClass="my-header-class"
                        className="title-collapse"
                        showArrow={true}
                        onClick={() => setActiveKey(Math.random(Math.floor(key)) * 100)}
                    >
                        {content}
                    </StyledPanel>
                )
            }


        </StyledCollapseContainer>
    )
    function openPanel(e) {


        console.log(" evenement on change")


    }
}
export default CollapseAbout
