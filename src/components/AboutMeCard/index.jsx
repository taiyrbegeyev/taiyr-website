import React from 'react'
import {
  AboutMeWrapper, AboutMePictureSection, AboutMePictureWrapper,
  AboutMePicture, AboutMeImage, AdditionalSection, DownloadCVButton,
  AboutMeInfoSection, AboutMeInfo, AboutMeInfoName, AboutMeInfoNameSub,
  AboutMeInfoDescription
} from './styles'
import profilePic from 'assets/taiyr.png'
import profileImg from 'assets/taiyrKid.jpg'
import { about_me } from 'config/text'
import cv from 'assets/Taiyr_Begeyev_CV_EU.pdf'

const AboutMeCard = () => {
  return (
    <AboutMeWrapper>
      <AboutMePictureSection>
        <AboutMePictureWrapper>
          <AboutMePicture src={profilePic}/>
        </AboutMePictureWrapper>
        <AboutMeImage imageUrl={profileImg} />
        <AdditionalSection>
          <DownloadCVButton variant="contained" color="primary" href={cv} target="_blank">
            Download CV
          </DownloadCVButton>
        </AdditionalSection>
      </AboutMePictureSection>
      <AboutMeInfoSection>
        <AboutMeInfo>
          <AboutMeInfoName>
            <h2>Taiyr Begeyev</h2>
            <AboutMeInfoNameSub href="mailto:taiyrbegeyev@gmail.com">taiyrbegeyev@gmail.com</AboutMeInfoNameSub>
          </AboutMeInfoName>
          <AboutMeInfoDescription>
            <p>{about_me.about_me}</p>
          </AboutMeInfoDescription>
        </AboutMeInfo>
      </AboutMeInfoSection>
    </AboutMeWrapper>
  )
}

export default AboutMeCard
