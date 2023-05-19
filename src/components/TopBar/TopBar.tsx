import { BiMoon, BiSun } from "react-icons/bi";

import Button from "../UI/Button";
import styled from "styled-components";

type Props = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const TopBar = ({ isDarkMode, toggleTheme }: Props) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Container>
      <Logo>Guoda Codes</Logo>
      <Menu>
        <Navigation>
          <NavItem>About</NavItem>
          <NavItem>Projects</NavItem>
        </Navigation>
        <Button onClick={handleClick} accent>
          Contact me
        </Button>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <BiSun /> : <BiMoon />}
        </ThemeToggle>
      </Menu>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vw;
`;

const Logo = styled.h1``;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 3vw;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2vw;
`;

const NavItem = styled.a`
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.indicator};
  }
`;

const ThemeToggle = styled.div`
  svg {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.contrast};
  }

  &:hover {
    cursor: pointer;
  }
`;
