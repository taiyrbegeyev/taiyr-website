import React, { Component } from 'react'
import { scroller } from 'react-scroll'

import { 
  Header, Nav, Logo, NavBarItems, Anchor,
  DeveloperIcon, UnorderedList, LogoName,
  HamburgerIcon, ListContainer
} from './styles'
import {
  Drawer, IconButton, List,
  ListItem, ListItemIcon, ListItemText
} from '@material-ui/core'
import { School, Work, Code, ModeComment } from '@material-ui/icons'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import developer from 'assets/developer.png'

const theme = createMuiTheme({
  typography: {
    // Account for base font-size of 62.5%.
    htmlFontSize: 10,
  },
});

class NavBar extends Component {
  state = {
    drawerOpen: false
  }
  
  toggleDrawer = () => {
    this.setState((prevState) => ({
      drawerOpen: !prevState.drawerOpen
    }))
  }

  goTo = (containerId) => {
    scroller.scrollTo(containerId, {
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint"
    })
    this.toggleDrawer()
  }
  
  render() {
    const { windowWidth } = this.props
    return (
      <Header>
        <Nav>
          <Logo>
            <Anchor to='intro' spy={true} smooth={true} >
              <DeveloperIcon src={developer} />
            </Anchor>
            <LogoName>Taiyr Begeyev</LogoName>
          </Logo>
          <NavBarItems>
            {
              windowWidth > 850 ? 
              <UnorderedList>
                <ListItem>
                  <Anchor to='experience' spy={true} smooth={true}>Experience</Anchor>
                </ListItem>
                <ListItem>
                  <Anchor to='education' spy={true} smooth={true}>Education</Anchor>
                </ListItem>
                <ListItem>
                  <Anchor to='projects' spy={true} smooth={true}>Projects</Anchor>
                </ListItem>
                <ListItem>
                  <Anchor to='contact' spy={true} smooth={true}>Contact</Anchor>
                </ListItem>
              </UnorderedList>                         
              :
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.toggleDrawer}>
                  <HamburgerIcon />
                </IconButton>
            }
          </NavBarItems>
        </Nav>
        <MuiThemeProvider theme={theme}>
        <Drawer variant="temporary" anchor="bottom" open={this.state.drawerOpen} onClose={this.toggleDrawer}>
          <ListContainer role="presentation">
            <List>
              <ListItem button onClick={() => this.goTo('experience')}>
                <ListItemIcon><Work /></ListItemIcon>
                <ListItemText primary={'Experience'} />
              </ListItem>
              <ListItem button>
                <ListItemIcon><School /></ListItemIcon>
                <ListItemText primary={'Education and Skills'} />
              </ListItem>
              <ListItem button onClick={() => this.goTo('projects')}>
                <ListItemIcon><Code /></ListItemIcon>
                <ListItemText primary={'Projects'} />
              </ListItem>
              <ListItem button>
                <ListItemIcon><ModeComment /></ListItemIcon>
                <ListItemText primary={'Contact'} />
              </ListItem>
            </List>
          </ListContainer>
        </Drawer>
        </MuiThemeProvider>
      </Header>
    )
  }
}

export default NavBar