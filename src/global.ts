import { DefaultTheme, createGlobalStyle } from "styled-components";

import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle<DefaultTheme>`

${normalize}

 * {
    font-family: 'Wix Madefor Display', sans-serif;
 }

body{
    background-color: ${({ theme }) => theme.background};
    margin: 0;
    color: ${({ theme }) => theme.text};
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
