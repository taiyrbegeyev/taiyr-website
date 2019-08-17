import React from 'react'
import { 
  Header, Nav, Logo, NavBarItems, Anchor,
  DeveloperIcon, UnorderedList, ListItem, LogoName
} from './styles'
import developer from 'assets/developer.png'

const NavBar = () => {
  return (
  <Header>
    <Nav>
      <Logo>
        <Anchor href="/">
          <DeveloperIcon src={developer} />
        </Anchor>
        <LogoName>Taiyr Begeyev</LogoName>
      </Logo>
      <NavBarItems>
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
      </NavBarItems>
    </Nav>
  </Header>
  )
}

export default NavBar