import SectionHeader from "../../components/Headers/SectionHeader";
import styled, { useTheme } from "styled-components";
import { theme } from "../../styles/theme";

type Props = {
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
};

const About = ({ aboutRef, skillsRef }: Props) => {
  const theme = useTheme();

  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container ref={aboutRef}>
      <SectionHeader>About Me</SectionHeader>
      <ContentWrapper>
        <TextContainer>
          <Text>
            Hello, I'm Guoda, a passionate web developer specializing in
            front-end development. With a focus on creating engaging and
            user-friendly experiences, I bring innovative ideas to life through
            clean and efficient code.
          </Text>
          <Text>
            My passion lies in combining my technical expertise with my innate
            creativity to craft visually captivating and user-friendly websites.
            By seamlessly blending aesthetics with functionality, I aim to bring
            ideas to life and make online interactions engaging and memorable.
          </Text>
          <Text>
            I am constantly seeking new challenges and opportunities to expand
            my skill set, whether it's diving into new frameworks or exploring
            emerging technologies. To learn more about my skill set, please
            check out the{" "}
            <Link onClick={() => handleScroll(skillsRef)}>Skills</Link> section
            below.
          </Text>
          <Text>
            Let's collaborate on your next web development venture and create
            remarkable digital experiences together.
          </Text>
        </TextContainer>
        <PhotoContainer>
          <ProfilePic src={theme.profilePhoto} alt="profile photo" />
        </PhotoContainer>
      </ContentWrapper>
    </Container>
  );
};

export default About;

const Container = styled.section`
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 32px 0;
  position: relative;
`;

const TextContainer = styled.div`
  flex: 1;
  z-index: 2;
`;

const Text = styled.p`
  font-size: 1.3rem;
  margin: 0 0 18px;
`;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const PhotoContainer = styled.div`
  position: absolute;
  left: 50%;
  z-index: 1;
  flex: 1;
`;

const ProfilePic = styled.img`
  max-height: 600px;
`;
