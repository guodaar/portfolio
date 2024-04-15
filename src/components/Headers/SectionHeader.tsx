import { LuSparkle, LuSparkles } from "react-icons/lu";

import { PropsWithChildren } from "react";
import styled from "styled-components";

const SectionHeader = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <LuSparkle />
      <Text>{children}</Text>
      <LuSparkles />
    </Container>
  );
};

export default SectionHeader;

const Container = styled.div`
  padding: 32px 0 6px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.secondary};
  }
`;

const Text = styled.h2`
  color: ${({ theme }) => theme.text};
  margin: 0;
  font-family: "MuseoModerno", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: italic;
  font-size: 2rem;
`;
