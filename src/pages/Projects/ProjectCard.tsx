import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import { HiOutlineExternalLink } from "react-icons/hi";
import { PropsWithChildren } from "react";
import { roundedBorder } from "../../styles/stylevariables";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

interface Props extends PropsWithChildren {
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  photos: string[];
  github: string;
  demo: string;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  tools,
  photos,
  github,
  demo,
}: Props) => {
  return (
    <MainContainer>
      <LeftWrapper>
        <Carousel images={photos} />
      </LeftWrapper>
      <RightWrapper>
        <div>
          <ToolsContainer>
            {tools.map((tool) => (
              <DevIcon
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg`}
                alt={`Vector icon for ${tool}`}
                key={tool}
              />
            ))}
          </ToolsContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>

          <Description>{description}</Description>
        </div>
        <ButtonsContainer>
          <Button onClick={() => window.open(`${github}`, "_blank")}>
            View on GitHub
            <HiOutlineExternalLink />
          </Button>
          <Button onClick={() => window.open(`${demo}`, "_blank")} accent>
            Live demo
            <HiOutlineExternalLink />
          </Button>
        </ButtonsContainer>
      </RightWrapper>
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

  @media ${device.lg} {
    flex-direction: column;
    gap: 48px;
  }
`;

const LeftWrapper = styled.div`
  flex: 1.4;
`;

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ToolsContainer = styled.div`
  height: 50px;

  img {
    height: 40px;
    margin: 0 8px 0 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 16px;

  @media ${device.md} {
    flex-direction: column;
  }
`;

const DevIcon = styled.img`
  margin: 8px;
`;

const Title = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
  margin: 8px 0 16px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  font-style: italic;
  margin: 0 0 16px 0;
`;

const Description = styled.p`
  font-size: 1.1rem;
`;
