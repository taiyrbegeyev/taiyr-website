import React, {Component} from 'react'
import desktopImage from 'assets/IMG_1758.jpg'
import mobileImage from 'assets/IMG_1766.jpg'
import {
  IntroContainer, NameContainer, Title, SubTitle, ScrollDown
} from './styles'
import Typist from 'react-typist'

class Intro extends Component {
  state = {
    windowHeight: undefined,
    windowWidth: undefined
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    })
  }
  
  render() {
    const imageUrl = this.state.windowWidth >= 768 ? desktopImage : mobileImage
    const titleMargin = this.state.windowWidth >= 650 ? 9 : 40;
    
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
