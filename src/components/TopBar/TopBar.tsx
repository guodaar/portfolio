import { BiMoon, BiSun } from "react-icons/bi";

import styled from "styled-components";

type Props = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const TopBar = ({ isDarkMode, toggleTheme }: Props) => {
  return (
    <Container>
      <Menu>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
      </Menu>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <BiMoon /> : <BiSun />}
      </ThemeToggle>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Menu = styled.nav``;

const NavItem = styled.a``;

const ThemeToggle = styled.div`
  svg {
    font-size: 1.7rem;
  }
`;
