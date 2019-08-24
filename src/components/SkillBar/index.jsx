import React, { Component } from 'react'
import { skills } from 'config/text'
import { SkillSet } from './styles'

class Skills extends Component {
  colors = {
    "bar": "#3498db",
    "title": {
      "text": "#fff",
      "background": "#2980b9"
    }
  }
  
  render() {
    return(
      <SkillSet skills={skills} colors={this.colors} />
    )
  }
}

export default Skills
