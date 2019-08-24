import React, { Component } from 'react'
import { EducationContainer, SkillsContainer } from './styles'
import Skills from 'components/SkillBar'

class Education extends Component {
  render() {
    return (
      <EducationContainer id="education">
        <SkillsContainer>
          <Skills />
        </SkillsContainer>
      </EducationContainer>
    )
  }
}

export default Education
