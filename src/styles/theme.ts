import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  primary: "#5DEB41",
  primaryHover: "#34cb15",
  secondary: "#7664A9",
  border: "#ffffff",
  text: "#ffffff",
  background: "#222325",
  indicator: "#1E9B04",
  contrast: "#ffffff",
  neutral: "#454647",
};

const lightTheme: DefaultTheme = {
  primary: "#ffc73a",
  primaryHover: "#f5af00",
  secondary: "#949CFF",
  border: "#222325",
  text: "#222325",
  background: "#f7f5ed",
  indicator: "#FC7557",
  contrast: "#222325",
  neutral: "#ffffff",
};

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};
