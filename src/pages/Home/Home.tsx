import styled from "styled-components";

type Props = {
  mainRef: React.RefObject<HTMLElement>;
};

const Home = ({ mainRef }: Props) => {
  return <Container ref={mainRef}>Home</Container>;
};

export default Home;

const Container = styled.section`
  height: 100vh;
`;
