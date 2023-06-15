import SectionHeader from "../../components/Headers/SectionHeader";
import styled from "styled-components";

type Props = {
  aboutRef: React.RefObject<HTMLElement>;
};

const About = ({ aboutRef }: Props) => {
  return (
    <Container ref={aboutRef}>
      <SectionHeader>About Me</SectionHeader>
    </Container>
  );
};

export default About;

const Container = styled.section`
  height: 100vh;
`;
