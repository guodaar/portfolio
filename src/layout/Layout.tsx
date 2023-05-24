import { PropsWithChildren, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Footer from "./Footer";
import GlobalStyle from "../global";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { theme } from "../styles/theme";

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
  margin: 0 3vw;
`;

const Content = styled.main``;
