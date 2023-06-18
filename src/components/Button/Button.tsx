import {
  border,
  darkColor,
  roundedBorder,
  transition,
} from "../../styles/stylevariables";

import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  accent?: boolean;
  large?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  onClick,
  children,
  type = "button",
  accent = false,
  large = false,
  fullWidth = false,
  disabled,
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      accent={accent}
      large={large}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  accent: boolean;
  large: boolean;
  fullWidth: boolean;
}>`
  background-color: ${({ accent, theme }) =>
    accent ? theme.primary : theme.background};
  color: ${({ accent, theme }) => (accent ? darkColor : theme.contrast)};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  font-size: ${({ large }) => (large ? "1.3rem" : "1.1rem")};
  cursor: pointer;
  border: ${border};
  border-color: ${({ accent, theme }) =>
    accent ? theme.primary : theme.border};
  border-radius: ${roundedBorder};
  padding: ${({ large }) => (large ? "18px 24px" : "10px 18px")};
  font-weight: 600;
  letter-spacing: 1.2px;
  transition: ${transition};

  &:hover {
    background-color: ${({ accent, theme }) =>
      accent ? theme.primaryHover : theme.primaryHover};
    border-color: ${({ accent, theme }) =>
      accent ? theme.primaryHover : theme.primaryHover};
    color: ${darkColor};
  }
`;
