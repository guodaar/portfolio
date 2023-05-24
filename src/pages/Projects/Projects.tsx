import styled from "styled-components";

type Props = {
  projectsRef: React.RefObject<HTMLElement>;
};

const Projects = ({ projectsRef }: Props) => {
  return <Container ref={projectsRef}>Projects</Container>;
};

export default Projects;

const Container = styled.section`
  height: 100vh;
`;
