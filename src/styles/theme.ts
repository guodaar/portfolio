import { Theme } from "./types";

const darkTheme: Theme = {
  primary: "#00bcd4",
  secondary: "#f3f3f3",
  border: "#e0e0e0",
  text: "#fff",
  background: "#212121",
  indicator: "#FFCC00",
};

const lightTheme: Theme = {
  primary: "#003366",
  secondary: "#eee",
  border: "#878787",
  text: "#000",
  background: "#fff",
  indicator: "#ccc",
};

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};
