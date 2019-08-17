import styled from 'styled-components'
import {Paper} from '@material-ui/core'
import { device } from 'config/device'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  position: relative;
`

export const AboutMeWrapper = styled(Paper)`
  width: 80vw;
  background-color: gray;
  
  @media ${device.tablet} {
    width: 40vw;
  }
`

export const AboutMeInfoSection = styled.div`
  width: 100%;
`

export const AboutMeInfo = styled.div`
  height: auto;
  font-size: 1.6rem;
  margin-left: 1rem;
`

export const AboutMeInfoName = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
`

export const AboutMeInfoDescription = styled.div`
  margin-top: 1rem;
`

export const AboutMePictureSection = styled.div`
  width: 100%;
  height: 25vh;
  position: relative;

  @media ${device.tablet} {
    height: 25rem
  }
`

export const AboutMePictureWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: 1rem;
`

export const AboutMePicture = styled.img`
  border-radius: 50%;
  border: 0.5rem solid white;
  width: 30%;

  @media ${device.tablet} {
    width: 12.8rem;
  }
`

export const AboutMeImage = styled.div`
  background-image: url("${props => props.imageUrl}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70%;
  width: 100%;
`
