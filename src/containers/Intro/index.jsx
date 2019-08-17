import React, {Component} from 'react'
import desktopImage from 'assets/IMG_1758.jpg'
import mobileImage from 'assets/IMG_1766.jpg'
import {
  IntroContainer, NameContainer, Title, SubTitle, ScrollDown
} from './styles'
import Typist from 'react-typist'

class Intro extends Component {
  render() {
    const { windowWidth } = this.props
    
    const imageUrl = windowWidth >= 768 ? desktopImage : mobileImage
    const titleMargin = windowWidth >= 650 ? 9 : 40;
    
    return (
      <IntroContainer imageUrl={imageUrl}>
        <NameContainer titleMargin={titleMargin}>
          <Title>
            <Typist cursor={{show: false}} avgTypingDelay={140}>
              <h1>Taiyr Begeyev</h1>
            </Typist>
          </Title>
          <SubTitle>
            <Typist cursor={{show: false}} startDelay={2000}>
              <p>Software Engineer</p>
            </Typist>
          </SubTitle>
        </NameContainer>
        <ScrollDown />
      </IntroContainer>
    )
  }
};

export default Intro
