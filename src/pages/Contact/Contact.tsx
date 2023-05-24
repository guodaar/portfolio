import styled from "styled-components";

type Props = {
  contactRef: React.RefObject<HTMLElement>;
};

const Contact = ({ contactRef }: Props) => {
  return <Container ref={contactRef}>Contact</Container>;
};

export default Contact;

const Container = styled.section`
  height: 100vh;
`;
