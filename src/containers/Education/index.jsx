import React, { Component } from 'react'
import { EducationContainer, SkillsContainer } from './styles'
import Skills from 'components/SkillBar'
import EducationCard from 'components/EducationCard'

class Education extends Component {
  render() {
    return (
      <EducationContainer id="education">
        <EducationCard />
        <SkillsContainer>
          <Skills />
        </SkillsContainer>
      </EducationContainer>
    )
  }
}

export default Education
