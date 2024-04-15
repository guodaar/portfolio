import styled from "styled-components";
import { LuSparkle, LuSparkles } from "react-icons/lu";
import { device } from "../../styles/breakpoints";

type Props = {
  mainRef: React.RefObject<HTMLElement>;
};

const Home = ({ mainRef }: Props) => {
  return (
    <Container ref={mainRef}>
      <Wrapper>
        <Text>Hi, my name is</Text>
        <TitleText>
          <span>G</span>UODA <LuSparkles />
        </TitleText>
        <SubtitleText>
          {" "}
          <LuSparkle />
          AND I CODE
        </SubtitleText>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  margin-bottom: 64px;
`;

const Wrapper = styled.div`
  border-radius: 50px;
  padding: 24px 15vw 24px 5vw;
  background-image: ${({ theme }) => `url(${theme.grain})`};
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    padding: 24px 5vw;
    min-height: 30vh;
  }
`;

const TitleText = styled.h2`
  font-family: "MuseoModerno", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 9vw;
  margin: 0;

  svg {
    font-size: 6vw;
    color: ${({ theme }) => theme.background};
  }

  @media ${device.md} {
    font-size: 15vw;

    svg {
      font-size: 10vw;
    }
  }
`;

const SubtitleText = styled.h2`
  font-family: "MuseoModerno", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 6vw;
  margin: 0 0 32px 20vw;

  svg {
    font-size: 4.5vw;
    color: ${({ theme }) => theme.background};
  }

  @media ${device.md} {
    font-size: 7vw;

    svg {
      font-size: 5vw;
    }
  }
`;

const Text = styled.p`
  font-size: 1.8vw;
  margin-bottom: 0;
  margin-left: -20vw;

  @media ${device.md} {
    font-size: 4vw;
  }
`;
