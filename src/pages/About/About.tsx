import styled from "styled-components";

type Props = {
  aboutRef: React.RefObject<HTMLElement>;
};

const About = ({ aboutRef }: Props) => {
  return <Container ref={aboutRef}>About</Container>;
};

export default About;

const Container = styled.section`
  height: 100vh;
`;
