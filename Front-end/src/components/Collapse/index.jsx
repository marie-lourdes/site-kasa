
import { useState } from "react"

import contentPanel from "../../utils/dataPanel.js"

//styled component
import { StyledCollapse, StyledPanel } from "./StyledCollapse"



function CollapseAbout() {
    const [panel, setPanel] = useState(false)

    return (

        <StyledCollapse accordion="true">

            {
                contentPanel.map(({ title, content }, index) =>
                    <StyledPanel key={`${index}-${title}`} value={panel} arrow={panel ? "0deg" : "180deg"} header={title} headerClass="my-header-class" className="title-collapse" showArrow={true} onChange={(e) => setPanel(e.target.value)}>
                        {content}
                    </StyledPanel>
                )
            }


        </StyledCollapse>
    )
    function openPanel(e) {


        console.log(" evenement on change")


    }
}
export default CollapseAbout
