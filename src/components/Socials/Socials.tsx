import styled from "styled-components";
import { transition } from "../../styles/stylevariables";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { device } from "../../styles/breakpoints";

const SocialIcons = () => {
  return (
    <Socials>
      <li>
        <a href="https://www.linkedin.com/in/guodaar/" target="_blank">
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/guodaar" target="_blank">
          <BsGithub />
        </a>
      </li>
    </Socials>
  );
};

const Socials = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 18px;

  a {
    color: ${({ theme }) => theme.text};
    transition: ${transition};
  }

  a:hover {
    color: ${({ theme }) => theme.secondary};
  }

  svg {
    font-size: 1.5rem;
  }

  @media ${device.md} {
    flex-direction: row;
  }
`;

export default SocialIcons;
