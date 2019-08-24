import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'

export const ContactContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const ContactMe = styled.div`
  background-image: url("${props => props.imageUrl}");
  width: 100vw;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const ContactMeText = styled.p`
  font-size: 3rem;
`

export const ContactLinksContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContactLinks = styled(SocialIcon)`
  &&& {
    margin: 1rem;
  }
`
