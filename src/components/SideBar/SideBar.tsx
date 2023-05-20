import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import styled from "styled-components";
import { transition } from "../../styles/stylevariables";

const SideBar = () => {
  return (
    <Container>
      <Socials>
        <a href="https://www.linkedin.com/in/guodaar/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/guodaar" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/guodaparke/" target="_blank">
          <BsInstagram />
        </a>
      </Socials>
      <Email>guoda.arlauskaite@gmail.com</Email>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 200px;
  align-items: center;
  padding: 24px 0.5vw;
  width: 1vw;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  a {
    color: ${({ theme }) => theme.text};
    transition: ${transition};
  }

  a:hover {
    color: ${({ theme }) => theme.secondary};
  }

  svg {
    font-size: 1.4rem;
  }
`;

const Email = styled.div`
  transform: rotate(90deg);
  font-size: 1.1rem;
`;
