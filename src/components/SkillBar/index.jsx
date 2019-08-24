import React, { Component } from 'react'
import { skills } from 'config/text'
import { SkillSet } from './styles'

class Skills extends Component {
  render() {
    return(
      <SkillSet skills={skills} />
    )
  }
}

export default Skills
