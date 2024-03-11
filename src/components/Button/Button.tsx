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
  cursor: pointer;
  border: ${border};
  font-weight: 600;
  letter-spacing: 1.2px;
  transition: ${transition};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: ${transition};

  background-color: ${({ accent, theme }) =>
    accent ? theme.primary : theme.neutral};
  color: ${({ accent, theme }) => (accent ? darkColor : theme.contrast)};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  font-size: ${({ large }) => (large ? "1.3rem" : "1.1rem")};
  border-color: ${({ accent, theme }) =>
    accent ? theme.primary : theme.border};
  border-radius: ${roundedBorder};
  padding: ${({ large }) => (large ? "18px 24px" : "10px 18px")};

  &:hover {
    background-color: ${({ accent, theme }) =>
      accent ? theme.primaryHover : theme.darkerBackground};
    border-color: ${({ accent, theme }) =>
      accent ? theme.primaryHover : theme.border};
    color: ${({ accent, theme }) => (accent ? darkColor : theme.border)};
  }

  svg {
    font-size: 1.4rem;
  }
`;
