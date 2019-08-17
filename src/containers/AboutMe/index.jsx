import React, { Component } from 'react'
import SocialMedia from 'components/SocialMedia/SocialMedia'
import NavBar from 'components/NavBar/NavBar'
import { 
  MainContainer, AboutMeWrapper,
  AboutMeImage, AboutMePicture,
  AboutMeInfo, AboutMeInfoSection,
  AboutMePictureWrapper, AboutMePictureSection,
  AboutMeInfoName, AboutMeInfoDescription
} from './styles'
import profilePic from 'assets/taiyr.png'
import profileImg from 'assets/taiyrKid.jpg'

class AboutMe extends Component {
  render() {
    return(
      <React.Fragment>
        <NavBar/>
        <MainContainer>
          <SocialMedia />
          <AboutMeWrapper>
            <AboutMePictureSection>
              <AboutMePictureWrapper>
                <AboutMePicture src={profilePic}/>
              </AboutMePictureWrapper>
              <AboutMeImage imageUrl={profileImg} />
            </AboutMePictureSection>
  
            <AboutMeInfoSection>
              <AboutMeInfo>
                <AboutMeInfoName>
                  <h2>Taiyr Begeyev</h2>
                </AboutMeInfoName>
                <AboutMeInfoDescription>
                  <p>I am a Computer Science student at Jacobs University Bremen, which is in Germany, and I am looking for a summer internship position in Europe. I expect to graduate in 2021. My current cources are focussed on OOP, side of Computer Science that I find fascinating. I am gaining further experience aside from my studies through learning Web Technologies in order to create fully functional web applications. I enjoy problem solving and the challenges it brings with it and believe in team efforts. I rapidly adapt to the new work culture and am a good team player. I hope that you will give me the chance to interview for the available position.</p>
                </AboutMeInfoDescription>
              </AboutMeInfo>
            </AboutMeInfoSection>  
          </AboutMeWrapper>
        </MainContainer>
      </React.Fragment>
    )
  }
}

export default AboutMe