import React, { Component } from 'react'
import Timeline from 'components/Timeline'
import { ExperienceContainer } from './styles'

class Experience extends Component {
  render() {
    return(
      <ExperienceContainer id='experience'>
        <Timeline />
      </ExperienceContainer>
    )
  }
}

export default Experience
