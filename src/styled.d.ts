import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    border: string;
    text: string;
    background: string;
    indicator: string;
    contrast: string;
    neutral: string;
  }
}
