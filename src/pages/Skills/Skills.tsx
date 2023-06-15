import SectionHeader from "../../components/Headers/SectionHeader";
import styled from "styled-components";

type Props = {
  skillsRef: React.RefObject<HTMLElement>;
};

const Skills = ({ skillsRef }: Props) => {
  return (
    <Container ref={skillsRef}>
      <SectionHeader>Skills</SectionHeader>
    </Container>
  );
};

export default Skills;

const Container = styled.section`
  height: 100vh;
`;
