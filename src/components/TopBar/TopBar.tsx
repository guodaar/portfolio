import { HiMoon, HiOutlineMoon, HiOutlineSun, HiSun } from "react-icons/hi";

import Button from "../UI/Button";
import styled from "styled-components";
import { useState } from "react";

type Props = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const TopBar = ({ isDarkMode, toggleTheme }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    console.log("clicked");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container>
      <Logo>Guoda Codes</Logo>
      <Menu>
        <Navigation>
          <NavItem>About me</NavItem>
          <NavItem>Skills</NavItem>
          <NavItem>Projects</NavItem>
        </Navigation>
        <Button onClick={handleClick} accent>
          Contact me
        </Button>
        <ThemeToggle
          onClick={toggleTheme}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isDarkMode ? (
            isHovered ? (
              <HiSun />
            ) : (
              <HiOutlineSun />
            )
          ) : isHovered ? (
            <HiMoon />
          ) : (
            <HiOutlineMoon />
          )}
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
  cursor: pointer;
  text-decoration: none;
  position: relative;
  font-size: 1.2rem;
  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1.5px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.indicator};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    color: ${({ theme }) => theme.indicator};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
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
