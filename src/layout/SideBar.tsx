import { BsGithub, BsLinkedin } from "react-icons/bs";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import styled from "styled-components";
import { transition } from "../styles/stylevariables";

const SideBar = () => {
  return (
    <Container>
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
      <ScrollToTop />
    </Container>
  );
};

export default SideBar;

const Container = styled.aside`
  position: fixed;
  right: 3vw;
  top: 14vh;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.5vw;
  width: 1vw;
`;

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
`;
