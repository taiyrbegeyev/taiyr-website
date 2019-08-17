import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 10vh;
  overflow: hidden;
  font-family: 'Open Sans', sans-serif !important;
  background-color: gray;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #33333f;
`;

const LogoName = styled.p`
  font-weight: "550";
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const NavBarItems = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const Anchor = styled.a`
  outline: none;
  text-decoration: none;
  color: #776f8f;
  cursor: pointer;
  padding: 0 2rem;
`;

const DeveloperIcon = styled.img`
  width: 4rem;
  height: 4rem;
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const ListItem = styled.li`
`;

const ToggleButtonItem = styled.div`
  padding: 0 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export { 
  Header, Nav, Logo, NavBarItems, Anchor,
  DeveloperIcon, UnorderedList, ListItem,
  ToggleButtonItem, LogoName
};