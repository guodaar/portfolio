import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <Socials>
        <BsLinkedin />
        <BsGithub />
        <BsInstagram />
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
  padding: 24px 2vw;
  width: 1vw;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  svg {
    font-size: 1.4rem;
  }
`;

const Email = styled.div`
  transform: rotate(90deg);
  font-size: 1.2rem;
`;
