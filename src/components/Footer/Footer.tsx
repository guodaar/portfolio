import { border } from "../../styles/stylevariables";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Socials></Socials>
      <p>guoda.arlauskaite@gmail.com</p>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3vw;
`;

const Socials = styled.div``;
