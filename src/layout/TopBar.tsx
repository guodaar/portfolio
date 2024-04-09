import { HiMenu, HiOutlinePencilAlt, HiX } from "react-icons/hi";

import Button from "../components/Button/Button";
import styled from "styled-components";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useState } from "react";
import { device } from "../styles/breakpoints";
import { border } from "../styles/stylevariables";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";

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
  const scrollDirection = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
  };

  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <Container scrollDirection={scrollDirection}>
      <Logo>Guoda Codes</Logo>
      <MobileMenuButton onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <HiX /> : <HiMenu />}
      </MobileMenuButton>
      <MenuContainer isOpen={isMobileMenuOpen}>
        <Navigation>
          <NavItem onClick={() => handleScroll(aboutRef)}>About me</NavItem>
          <NavItem onClick={() => handleScroll(skillsRef)}>Skills</NavItem>
          <NavItem onClick={() => handleScroll(projectsRef)}>Projects</NavItem>
        </Navigation>
        <Button onClick={() => handleScroll(contactRef)} accent>
          Contact me
          <HiOutlinePencilAlt />
        </Button>
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </MenuContainer>
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

const MobileMenuButton = styled.div`
  display: none;

  svg {
    font-size: 2rem;
  }

  @media ${device.md} {
    display: block;
  }
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 3vw;

  @media ${device.md} {
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    border: ${border};
    background-color: ${({ theme }) => theme.background};
    transition: transform 0.5s ease;
    transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100vh")});
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2vw;

  @media ${device.md} {
    flex-direction: column;
  }
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
