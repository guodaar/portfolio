import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { border, borderRadius, transition } from "../../styles/stylevariables";

import styled from "styled-components";
import { useState } from "react";

type Props = {
  images: string[];
};

const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container>
      <ButtonContainer>
        <HiOutlineChevronLeft onClick={handlePrevImage} />
      </ButtonContainer>
      <ImageWrapper>
        <img src={images[currentIndex]} alt="Carousel image of website demo" />
      </ImageWrapper>
      <ButtonContainer>
        <HiOutlineChevronRight onClick={handleNextImage} />
      </ButtonContainer>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  /* min-height: 250px; */
  display: flex;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const ImageWrapper = styled.div`
  border-radius: ${borderRadius};
  border: 3px solid ${({ theme }) => theme.neutral};
  outline: ${border};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    font-size: 3rem;
    transition: ${transition};
  }

  svg:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;
