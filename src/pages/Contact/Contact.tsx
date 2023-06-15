import SectionHeader from "../../components/Headers/SectionHeader";
import styled from "styled-components";

type Props = {
  contactRef: React.RefObject<HTMLElement>;
};

const Contact = ({ contactRef }: Props) => {
  return (
    <Container ref={contactRef}>
      <SectionHeader>Contact</SectionHeader>
    </Container>
  );
};

export default Contact;

const Container = styled.section`
  height: 100vh;
`;
