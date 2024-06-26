import { PropsWithChildren, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Footer from "./Footer";
import GlobalStyle from "../global";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { theme } from "../styles/theme";
import { device } from "../styles/breakpoints";

interface LayoutProps extends PropsWithChildren {
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

const Layout = ({
  children,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <Container>
        <GlobalStyle />
        <TopBar
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <SideBar />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Content = styled.main`
  padding: 32px 5vw;
  margin: 0 3vw;

  @media ${device.md} {
    padding: 32px 2vw;
  }
`;
