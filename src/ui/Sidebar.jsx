import React, { useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useDarkMode } from "../context/UseDarkModeContext";
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1.2rem 2.4rem;
  border: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;

  align-items: center;
  grid-row: 1/-1;

  &.dark {
    background-color: var(--color-blue-secondary);
    color: white;
  }
`;

function Sidebar() {
  // const { isDark, setIsDark } = useDarkModes();
  const { isDarkMode } = useDarkMode();
  return (
    <StyledSidebar className={isDarkMode ? "dark" : ""}>
      <Logo />

      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
