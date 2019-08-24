import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {
  ContactContainer, ContactMe, ContactMeText,
  ContactLinksContainer, ContactLinks
} from './styles'
import taiyrPro from 'assets/lined_paper.png'
import { socialMedia } from 'config/index'

const theme = createMuiTheme({
  typography: {
    // Account for base font-size of 62.5%.
    htmlFontSize: 10,
  }
})

class Contact extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ContactContainer id="contact">
          <ContactMe imageUrl={taiyrPro}>
            <ContactMeText>I am here. I am always open for a good cup of coffee</ContactMeText>
          </ContactMe>
          <ContactLinksContainer>
            {
              socialMedia.map(key =>
                <ContactLinks url={key.url} />
              )
            }
          </ContactLinksContainer>
        </ContactContainer>
      </MuiThemeProvider>
    )
  }
}

export default Contact
