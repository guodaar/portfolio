import ProjectCard from "./ProjectCard";
import SectionHeader from "../../components/Headers/SectionHeader";
import { projects } from "./projectsList";
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
          <div>
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              tools={project.built_using}
              photos={project.photos}
            />
          </div>
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

  & > div:nth-child(even) {
    flex-direction: row-reverse;
  }
`;
