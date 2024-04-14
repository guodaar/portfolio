import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary?: string;
    primaryHover?: string;
    secondary?: string;
    border?: string;
    text?: string;
    background?: string;
    darkerBackground?: string;
    indicator?: string;
    contrast?: string;
    neutral?: string;
    profilePhoto?: string;
    logo?: string;
    grain?: string;
  }
}
