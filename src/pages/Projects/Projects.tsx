import ProjectCard from "./ProjectCard";
import SectionHeader from "../../components/Headers/SectionHeader";
import { projects } from "./ProjectsList";
import styled from "styled-components";

type Props = {
  projectsRef: React.RefObject<HTMLElement>;
};

const Projects = ({ projectsRef }: Props) => {
  return (
    <Container ref={projectsRef}>
      <SectionHeader>Projects</SectionHeader>
      <CardsWrapper>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            tools={project.built_using}
          />
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default Projects;

const Container = styled.section``;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 32px 0 64px;
`;
