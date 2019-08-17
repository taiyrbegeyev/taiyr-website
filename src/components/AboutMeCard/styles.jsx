import styled from 'styled-components'
import { Paper, Button } from '@material-ui/core'
import { device } from 'config/device'

export const AboutMeWrapper = styled(Paper)`
  &&& {
    width: 85vw;
    @media ${device.tablet} {
      width: 60vw;
    }
    @media ${device.laptop} {
      width: 40vw;
    }
  }
`

export const AboutMePictureSection = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
  /* @media ${device.tablet} {
    height: 25rem
  } */
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
  border-radius: 0.4rem;
`

export const AdditionalSection = styled.div`
  height: 30%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-right: 2rem;
`

export const DownloadCVButton = styled(Button)`
  &&& {
    font-size: 1.3rem;
    text-transform: none;
  }
`

export const AboutMeInfoSection = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`

export const AboutMeInfo = styled.div`
  height: auto;
  font-size: 1.6rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
  line-height: 1.3125;
`

export const AboutMeInfoName = styled.div`
  padding: 0 2rem;
`

export const AboutMeInfoNameSub = styled.a`
  color: rgb(101, 119, 134);
  font-size: 15px;
  overflow-wrap: break-word;
  text-decoration: none;
  cursor: pointer;
`

export const AboutMeInfoDescription = styled.div`
  margin-top: 1rem;
  padding: 0 2rem;
  overflow-wrap: break-word;
`
