import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

import { PropsWithChildren } from "react";
import styled from "styled-components";

const SectionHeader = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <HiOutlineArrowNarrowRight />
      <Text>{children}</Text>
      <HiOutlineArrowNarrowLeft />
    </Container>
  );
};

export default SectionHeader;

const Container = styled.div`
  padding: 32px 3vw 6px;
  width: fit-content;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    font-size: 1.7rem;
  }
`;

const Text = styled.h2`
  color: ${({ theme }) => theme.text};
  margin: 0;
`;
