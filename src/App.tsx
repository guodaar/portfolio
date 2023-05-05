import styled, { ThemeProvider } from "styled-components";

import Footer from "./components/Footer/Footer";
import GlobalStyle from "./global";
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
        <TopBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Footer />
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
`;
