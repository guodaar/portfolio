import { HiMenu, HiOutlinePencilAlt, HiX } from "react-icons/hi";

import Button from "../components/Button/Button";
import styled from "styled-components";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useState } from "react";
import { device } from "../styles/breakpoints";
import { borderRadius } from "../styles/stylevariables";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import useScreenSize from "../hooks/useScreenSize";
import SocialIcons from "../components/Socials/Socials";

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
  const screenSize = useScreenSize();

  const isSmallScreen = screenSize <= 900;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
  };

  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <Container scrollDirection={scrollDirection}>
      <MobileMenuButton onClick={toggleMobileMenu}>
        <HiMenu />
      </MobileMenuButton>
      <MenuContainer isOpen={isMobileMenuOpen}>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen && <HiX />}
        </MobileMenuButton>
        <Logo>Guoda Codes</Logo>
        <Navigation>
          <NavItem onClick={() => handleScroll(aboutRef)}>About me</NavItem>
          <NavItem onClick={() => handleScroll(skillsRef)}>Skills</NavItem>
          <NavItem onClick={() => handleScroll(projectsRef)}>Projects</NavItem>
          <Button onClick={() => handleScroll(contactRef)} accent>
            Contact me
            <HiOutlinePencilAlt />
          </Button>
          {isSmallScreen && <SocialIcons />}
        </Navigation>
      </MenuContainer>
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
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
  margin: 0 3vw;
  z-index: 999;
  transition: top 500ms;
  top: ${({ scrollDirection }) => (scrollDirection === "up" ? "0px" : "-90px")};
`;

const Logo = styled.h1``;

const MobileMenuButton = styled.div`
  display: none;
  margin: 16px;

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
  justify-content: space-between;
  gap: 3vw;

  @media ${device.md} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    position: absolute;
    top: 0;
    left: -3vw;
    width: 70%;
    padding: 0 3vw 32px;
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
    background-color: ${({ theme }) => theme.darkerBackground};
    transition: transform 0.5s ease;
    transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-103vw")});
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2vw;

  @media ${device.md} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
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
