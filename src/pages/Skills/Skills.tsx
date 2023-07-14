import SectionHeader from "../../components/Headers/SectionHeader";
import SkillBubble from "./SkillBubble";
import { skills } from "./skillsList";
import styled from "styled-components";

type Props = {
  skillsRef: React.RefObject<HTMLElement>;
};

const Skills = ({ skillsRef }: Props) => {
  return (
    <Container ref={skillsRef}>
      <SectionHeader>Skills</SectionHeader>
      <SkillsContainer>
        {skills.map((skill) => (
          <SkillBubble key={skill.name} src={skill.src} title={skill.name} />
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.section`
  /* height: fit-content; */
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-auto-rows: 200px;
  gap: 18px;
  margin: 32px 0 64px;
`;
