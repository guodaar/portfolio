import { DefaultTheme, createGlobalStyle } from "styled-components";

import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle<DefaultTheme>`

${normalize}

body{
    background-color: ${({ theme }) => theme.background};
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
     font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

/* :root {
    min-height: 100vh;
    width: 100%;
} */
`;

export default GlobalStyle;
