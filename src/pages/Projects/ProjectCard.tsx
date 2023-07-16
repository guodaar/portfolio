import Carousel from "../../components/Carousel/Carousel";
import { PropsWithChildren } from "react";
import { roundedBorder } from "../../styles/stylevariables";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  name: string;
  description: string;
  tools: string[];
  photos: string[];
}

const ProjectCard = ({ name, description, tools, photos }: Props) => {
  return (
    <MainContainer>
      <PhotoContainer>
        <Carousel images={photos} />
      </PhotoContainer>
      <InfoContainer>
        <h3>{name}</h3>
        <p>{description}</p>
        <ToolsContainer>
          {tools.map((tool) => (
            <DevIcon
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg`}
              alt={`Vector icon for ${tool}`}
            />
          ))}
        </ToolsContainer>
      </InfoContainer>
    </MainContainer>
  );
};

export default ProjectCard;

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.neutral};
  border-radius: ${roundedBorder};
  padding: 40px;
  display: flex;
  gap: 2vw;
`;

const PhotoContainer = styled.div`
  flex: 1.4;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const ToolsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  height: 80px;
  margin: 32px 0;
`;

const DevIcon = styled.img`
  margin: 8px;
`;
