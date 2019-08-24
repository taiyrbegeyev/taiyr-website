import React, { Component } from 'react'
import { EducationContainer } from './styles'
import Skills from 'components/SkillBar'

class Education extends Component {
  render() {
    return (
      <EducationContainer id="education">
        <div>
          <Skills />
        </div>
      </EducationContainer>
    )
  }
}

export default Education
