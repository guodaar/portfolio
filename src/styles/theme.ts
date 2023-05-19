import { Theme } from "./types";

const darkTheme: Theme = {
  primary: "#5DEB41",
  secondary: "#7664A9",
  border: "#ffffff",
  text: "#ffffff",
  background: "#222325",
  indicator: "#1E9B04",
  contrast: "#ffffff",
  neutral: "#222325",
};

const lightTheme: Theme = {
  primary: "#ffc73a",
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
