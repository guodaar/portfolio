import styled, { ThemeProvider } from "styled-components";

import Footer from "./components/Footer/Footer";
import GlobalStyle from "./global";
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import { theme } from "./styles/theme";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <Container>
        <GlobalStyle />
        <header>
          <TopBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </header>
        <Main>
          <SideBar />
          <Content></Content>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  margin: 0 3vw;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
`;

const Content = styled.div``;
