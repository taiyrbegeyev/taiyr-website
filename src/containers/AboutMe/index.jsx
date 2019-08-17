import React, { Component } from 'react'
import SocialMedia from 'components/SocialMedia/SocialMedia'
import NavBar from 'components/NavBar/NavBar'
import AboutMeCard from 'components/AboutMeCard'
import { AboutMeContainer, MainContainer} from './styles'

class AboutMe extends Component {
  render() {
    const { windowWidth } = this.props

    return(
      <AboutMeContainer>
        <NavBar windowWidth={windowWidth} />
        <MainContainer>
          <SocialMedia />
          <AboutMeCard />
        </MainContainer>
      </AboutMeContainer>
    )
  }
}

export default AboutMe