import { PropsWithChildren } from "react";
import { roundedBorder } from "../../styles/stylevariables";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  name: string;
  description: string;
  tools: string[];
}

const ProjectCard = ({ name, description, tools }: Props) => {
  return (
    <MainContainer>
      <ContentWrapper>
        <div></div>
        <div>
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
        </div>
      </ContentWrapper>
    </MainContainer>
  );
};

export default ProjectCard;

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.neutral};
  border-radius: ${roundedBorder};
  padding: 32px;
`;

const ContentWrapper = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }
`;

const ToolsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  /* border-radius: ${roundedBorder}; */
  height: 80px;
  margin: 32px 0;
`;

const DevIcon = styled.img`
  margin: 8px;
`;
