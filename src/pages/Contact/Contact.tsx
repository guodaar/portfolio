import Button from "../../components/Button/Button";
import ContactForm from "./ContactForm";
import { roundedBorder } from "../../styles/stylevariables";
import styled from "styled-components";
import { useState } from "react";
import { device } from "../../styles/breakpoints";

type Props = {
  contactRef: React.RefObject<HTMLElement>;
};

const Contact = ({ contactRef }: Props) => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [toggleButtonVisibile, setToggleButtonVisible] = useState(true);
  const [thankYouMsg, setThankYouMsg] = useState(false);

  const handleAfterSubmit = () => {
    setContactFormOpen(false);
    setThankYouMsg(true);
    setTimeout(() => {
      setToggleButtonVisible(true);
      setThankYouMsg(false);
    }, 3000);
  };

  const toggleFormOpen = () => {
    setContactFormOpen(!contactFormOpen);
    setToggleButtonVisible(!toggleButtonVisibile);
  };

  return (
    <Container ref={contactRef}>
      <TextWrapper>
        {thankYouMsg ? (
          <Text>Thank you! I'll get back to you soon.</Text>
        ) : (
          <Text>Want to work together or have any questions?</Text>
        )}
        {toggleButtonVisibile ? (
          <Button onClick={toggleFormOpen} large>
            Get in Touch
          </Button>
        ) : null}
      </TextWrapper>
      {contactFormOpen ? <ContactForm closeForm={handleAfterSubmit} /> : null}
    </Container>
  );
};

export default Contact;

const Container = styled.section`
  border-radius: ${roundedBorder};
  background-color: ${({ theme }) => theme.secondary};
  padding: 24px 10vw;

  @media ${device.md} {
    padding: 24px 4vw;
  }
`;

const TextWrapper = styled.div`
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media ${device.md} {
    margin: 16px 0 32px;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  margin: 0;
  text-align: center;

  @media ${device.md} {
    font-size: 1.3rem;
  }
`;
