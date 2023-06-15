import SectionHeader from "../../components/Headers/SectionHeader";
import styled from "styled-components";

type Props = {
  projectsRef: React.RefObject<HTMLElement>;
};

const Projects = ({ projectsRef }: Props) => {
  return (
    <Container ref={projectsRef}>
      <SectionHeader>Projects</SectionHeader>
    </Container>
  );
};

export default Projects;

const Container = styled.section`
  height: 100vh;
`;
