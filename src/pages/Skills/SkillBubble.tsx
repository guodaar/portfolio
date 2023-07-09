import { borderRadius } from "../../styles/stylevariables";
import styled from "styled-components";

type Props = {
  src: string;
  title: string;
};

const SkillBubble = ({ src, title }: Props) => {
  return (
    <Container>
      <DevIcon src={src} />
      <Title>{title}</Title>
    </Container>
  );
};

export default SkillBubble;

const Container = styled.div`
  padding: 32px;
  border-radius: ${borderRadius};
  background-color: ${({ theme }) => theme.neutral};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & > * {
    transition: 0.2s ease-in-out;
  }
`;

const DevIcon = styled.img`
  position: absolute;
  height: 150px;
  top: 24px;

  ${Container}:hover & {
    opacity: 0;
  }
`;

const Title = styled.h4`
  opacity: 0;
  font-size: 1.4rem;

  ${Container}:hover & {
    opacity: 1;
  }
`;
