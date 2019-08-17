import React, { Component } from 'react'
import { 
  Header, Nav, Logo, NavBarItems, Anchor,
  DeveloperIcon, UnorderedList, LogoName,
  HamburgerIcon, ListContainer
} from './styles'
import {
  Drawer, IconButton, List,
  ListItem, ListItemIcon, ListItemText
} from '@material-ui/core'
import { AccountBalance } from '@material-ui/icons'
import developer from 'assets/developer.png'

class NavBar extends Component {
  state = {
    drawerOpen: false
  }
  
  toggleDrawer = () => {
    this.setState((prevState) => ({
      drawerOpen: !prevState.drawerOpen
    }))
  }
  
  render() {
    const { windowWidth } = this.props
    return (
      <Header>
        <Nav>
          <Logo>
            <Anchor href="#aboutme">
              <DeveloperIcon src={developer} />
            </Anchor>
            <LogoName>Taiyr Begeyev</LogoName>
          </Logo>
          <NavBarItems>
            {
              windowWidth < 768 ? 
              <UnorderedList>
                <ListItem>
                  <Anchor href="/">Education</Anchor>
                </ListItem>
                <ListItem>
                  <Anchor href="/">Experience</Anchor>
                </ListItem>
                <ListItem>
                  <Anchor href="/">Projects</Anchor>
                </ListItem>
                <ListItem>
                  <Anchor href="/">Contact</Anchor>
                </ListItem>
              </UnorderedList>                         
              :
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.toggleDrawer}>
                  <HamburgerIcon />
                </IconButton>
            }
          </NavBarItems>
        </Nav>
        <Drawer variant="temporary" anchor="bottom" open={this.state.drawerOpen} onClose={this.toggleDrawer}>
          <ListContainer role="presentation">
            <List>
              <ListItem button>
                <ListItemIcon><AccountBalance /></ListItemIcon>
                <ListItemText primary={'heye'} />
              </ListItem>
            </List>
          </ListContainer>
        </Drawer>
      </Header>
    )
  }
}

export default NavBar