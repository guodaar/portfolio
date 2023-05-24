import styled from "styled-components";

type Props = {
  skillsRef: React.RefObject<HTMLElement>;
};

const Skills = ({ skillsRef }: Props) => {
  return <Container ref={skillsRef}>Skills</Container>;
};

export default Skills;

const Container = styled.section`
  height: 100vh;
`;
