import React from 'react'
import CollapseAbout from '../../components/Collapse/CollapseAbout'

//styled component
import StyledAbout from './StyledAbout.js'
import StyledBanner from '../../layouts/StyledBanner.js'

function About() {
  return (
    <React.Fragment>
      <StyledBanner $about />
      <StyledAbout>
        <CollapseAbout />
      </StyledAbout>
    </React.Fragment>
  )
}

export default About
