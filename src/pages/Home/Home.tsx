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
  height: 100vh;
`;

const Wrapper = styled.div`
  border-radius: 50px;
  padding: 24px 5vw;
  background-image: ${({ theme }) => `url(${theme.grain})`};
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleText = styled.h2`
  font-family: "MuseoModerno", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 10rem;
  margin: 0 0 0 5vw;

  svg {
    font-size: 7rem;
    color: ${({ theme }) => theme.background};
  }

  @media ${device.lg} {
    font-size: 8rem;

    svg {
      font-size: 5rem;
    }
  }
`;

const SubtitleText = styled.h2`
  font-family: "MuseoModerno", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 6rem;
  margin: 0 0 32px 25vw;

  svg {
    font-size: 4.5rem;
    color: ${({ theme }) => theme.background};
  }

  @media ${device.lg} {
    font-size: 4.2rem;

    svg {
      font-size: 3rem;
    }
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  margin-bottom: 0;
`;
