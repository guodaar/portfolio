import { useState } from "react";
import { HiMoon, HiOutlineMoon, HiOutlineSun, HiSun } from "react-icons/hi";
import styled from "styled-components";

type Props = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};

const ThemeToggle = ({ toggleTheme, isDarkMode }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Toggle
      onClick={toggleTheme}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isDarkMode ? (
        isHovered ? (
          <HiSun />
        ) : (
          <HiOutlineSun />
        )
      ) : isHovered ? (
        <HiMoon />
      ) : (
        <HiOutlineMoon />
      )}
    </Toggle>
  );
};

const Toggle = styled.div`
  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.contrast};
  }

  &:hover {
    cursor: pointer;
  }
`;

export default ThemeToggle;
