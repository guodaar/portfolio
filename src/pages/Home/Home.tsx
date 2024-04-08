import styled from "styled-components";

type Props = {
  mainRef: React.RefObject<HTMLElement>;
};

const Home = ({ mainRef }: Props) => {
  return (
    <Container ref={mainRef}>
      <Wrapper>
        <p>Hi, my name is</p>
        <h2>Guoda. And I code.</h2>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  height: 100vh;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 50px;
  padding: 24px 5vw;
`;
