import {
  HiMoon,
  HiOutlineMoon,
  HiOutlinePencilAlt,
  HiOutlineSun,
  HiSun,
} from "react-icons/hi";

import Button from "../components/Button/Button";
import styled from "styled-components";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useState } from "react";

type Props = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
};

const TopBar = ({
  isDarkMode,
  toggleTheme,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollDirection = useScrollDirection();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container scrollDirection={scrollDirection}>
      <Logo>Guoda Codes</Logo>
      <Menu>
        <Navigation>
          <NavItem onClick={() => handleScroll(aboutRef)}>About me</NavItem>
          <NavItem onClick={() => handleScroll(skillsRef)}>Skills</NavItem>
          <NavItem onClick={() => handleScroll(projectsRef)}>Projects</NavItem>
        </Navigation>
        <Button onClick={() => handleScroll(contactRef)} accent>
          Contact me
          <HiOutlinePencilAlt />
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

const Container = styled.header<{ scrollDirection: "up" | "down" | null }>`
  position: sticky;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  transition: top 500ms;
  top: ${({ scrollDirection }) => (scrollDirection === "up" ? "0px" : "-90px")};
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
  letter-spacing: 1.2px;

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
    font-size: 1.8rem;
    color: ${({ theme }) => theme.contrast};
  }

  &:hover {
    cursor: pointer;
  }
`;
