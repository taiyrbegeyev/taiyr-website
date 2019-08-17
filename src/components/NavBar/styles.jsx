import styled from 'styled-components'
import { device } from 'config/device'

export const Header = styled.header`
  width: 100vw;
  height: 10vh;
  overflow: hidden;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
`

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #33333f;
`

export const LogoName = styled.p`
  font-weight: "550";
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`

export const NavBarItems = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

export const Anchor = styled.a`
  outline: none;
  text-decoration: none;
  color: #776f8f;
  cursor: pointer;
  padding: 0 2rem;
`

export const DeveloperIcon = styled.img`
  width: 4rem;
  height: 4rem;
`

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`

export const ListItem = styled.li`
`

export const ToggleButtonItem = styled.div`
  padding: 0 2rem;

  @media ${device.tablet} {
    display: none;
  }
`
