import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import { device } from 'config/device'

export const EducationWrapper = styled(Paper)`
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

export const UniImage = styled.div`
  background-image: url("${props => props.imageUrl}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 30vh;
  width: 100%;
  border-radius: 0.4rem;
`

export const EducationInfoSection = styled.div`
  width: 100%;
  padding: 2rem;
  height: auto;
  font-size: 1.6rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
  line-height: 1.3125;
`

export const EducationTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
`

export const BasicInfoSection = styled.div`
  margin: 2rem 0;
`

export const IconAndTextContainer = styled.div`
  color: rgb(101, 119, 134);
  font-size: 15px;
`

export const IconText = styled.span`
  margin-left: 0.5rem;
`
