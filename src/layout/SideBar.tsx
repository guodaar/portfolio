import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import styled from "styled-components";
import { device } from "../styles/breakpoints";
import SocialIcons from "../components/Socials/Socials";
import useScreenSize from "../hooks/useScreenSize";

const SideBar = () => {
  const screenSize = useScreenSize();

  const isSmallScreen = screenSize <= 900;

  return (
    <Container>
      {!isSmallScreen && <SocialIcons />}
      <ScrollToTop />
    </Container>
  );
};

export default SideBar;

const Container = styled.aside`
  position: fixed;
  right: 3vw;
  top: 14vh;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.5vw;
  width: 1vw;
  z-index: 100;

  @media ${device.md} {
    right: 6vw;
    justify-content: flex-end;
  }
`;
