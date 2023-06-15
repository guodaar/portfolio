import { useEffect, useState } from "react";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import styled from "styled-components";
import { transition } from "../../styles/stylevariables";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      {showTopBtn && <HiOutlineChevronDoubleUp onClick={goToTop} />}
    </Container>
  );
};

export default ScrollToTop;

const Container = styled.div`
  position: relative;

  svg {
    color: ${({ theme }) => theme.text};
    font-size: 3.5rem;
    position: fixed;
    bottom: 50px;
    right: 7vw;
    z-index: 20;
    cursor: pointer;
    animation: movebtn 3s ease-in-out infinite;
    transition: ${transition};

    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }

  @keyframes movebtn {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(18px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
