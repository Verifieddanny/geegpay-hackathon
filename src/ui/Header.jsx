import React from "react";
import { useMediaQuery } from "react-responsive";
import HeaderMobile from "./HeaderMobile";
import styled from "styled-components";
import HeaderDesktop from "./HeaderDesktop";
import { useDarkMode } from "../context/UseDarkModeContext";

const StyledHeader = styled.header`
  width: 100%;
  height: 100%;
  padding: 0.5rem 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
  &.dark {
    background-color: #35296e;
    color: white;
  }
  @media (max-width: 800px) {
    height: 4.5rem;
    display: flex;
    align-items: center;
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    z-index: 100000;
    background-color: #ffffff87;

    &.dark {
      background-color: #34296e69;
    }
  }
`;
function Header() {
  const { isDarkMode: isDark } = useDarkMode();
  const isDesktopOrTablet = useMediaQuery({ query: "(min-width: 800px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <StyledHeader className={isDark ? "dark" : ""}>
      {isDesktopOrTablet && <HeaderDesktop />}
      {isTabletOrMobile && <HeaderMobile />}
    </StyledHeader>
  );
}

export default Header;
