
import { useState } from "react"

import contentPanel from "../../utils/dataPanel.js"

//styled component
import { StyledCollapseContainer, StyledPanel } from "./StyledCollapse"



function CollapseAbout() {
    const [key, setActiveKey] = useState(0)
    const [openPanel, setPanel] = useState(false)
    console.log("key", key)
    console.log("panel", openPanel)
    console.log(contentPanel, "content panel")

    return (

        <StyledCollapseContainer accordion={false} >

            {
                contentPanel.map(({ title, content }, index) =>
                    <StyledPanel

                        key={`${index}-${key}`}
                        arrow={!openPanel ? "bottom-arrow" : "top-arrow"}
                        header={title}
                        headerClass="my-header-class"
                        className="title-collapse"
                        showArrow={true}
                        onChange={activeKey} onClick={() => setPanel(({ children }) => children && openPanel ? false : true)}>
                        {content}
                    </StyledPanel>
                )
            }
        </StyledCollapseContainer >
    )
    function activeKey(e) {
        setActiveKey((Math.random(Math.floor(key)) * 100))

        console.log(" evenement on change")


    }

}
export default CollapseAbout
