import SectionHeader from "../../components/Headers/SectionHeader";
import styled, { useTheme } from "styled-components";
import { device } from "../../styles/breakpoints";

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
        <PhotoContainer>
          <ProfilePic src={theme.profilePhoto} alt="profile photo" />
        </PhotoContainer>
        <TextContainer>
          <Text>
            Hi, I'm Guoda, a web developer who loves making websites look great
            and easy to use. I use clean code to turn creative ideas into
            reality, focusing on engaging designs and smooth functionality.
          </Text>
          <Text>
            I enjoy blending my technical skills with creativity to build
            attractive websites that people love to use.
          </Text>
          <Text>
            I'm always ready for new challenges, like learning new tools and
            technologies. Check out my{" "}
            <Link onClick={() => handleScroll(skillsRef)}>Skills</Link> below to
            learn more about what I can do.
          </Text>
          <Text>
            Let's work on your next web project and create awesome digital
            experiences together!
          </Text>
        </TextContainer>
      </ContentWrapper>
    </Container>
  );
};

export default About;

const Container = styled.section`
  min-height: 90vh;
`;

const ContentWrapper = styled.div`
  margin: 32px 0;
  display: flex;
  flex-direction: row-reverse;
  gap: 3vw;

  @media ${device.md} {
    flex-direction: column;
    gap: 32px;
  }
`;

const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  flex: 1.3;
`;

const ProfilePic = styled.img`
  width: 100%;

  @media ${device.md} {
    width: 80%;
  }
`;

const Text = styled.p`
  font-size: 1.3rem;
  margin: 0 0 18px;

  @media ${device.md} {
    font-size: 1.2rem;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;
