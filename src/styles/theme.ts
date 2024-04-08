import { DefaultTheme } from "styled-components";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";

const darkTheme: DefaultTheme = {
  primary: "#5DEB41",
  primaryHover: "#34cb15",
  secondary: "#9483C4",
  border: "#ffffff",
  text: "#ffffff",
  background: "#222325",
  darkerBackground: "#151516",
  indicator: "#1E9B04",
  contrast: "#ffffff",
  neutral: "#454647",
  profilePhoto: profile2,
};

const lightTheme: DefaultTheme = {
  primary: "#ffc73a",
  primaryHover: "#f5af00",
  secondary: "#949CFF",
  border: "#222325",
  text: "#222325",
  background: "#f7f5ed",
  darkerBackground: "#E8E6DF",
  indicator: "#FC7557",
  contrast: "#222325",
  neutral: "#ffffff",
  profilePhoto: profile1,
};

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};
