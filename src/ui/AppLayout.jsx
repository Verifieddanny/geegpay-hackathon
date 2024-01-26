import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled, { css } from "styled-components";
import { useDarkMode } from "../context/UseDarkModeContext";
import { useMediaQuery } from "react-responsive";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
  user-select: none;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 700px) {
    display: block;
  }
`;

const Main = styled.main`
  background-color: #fafafa;
  padding-left: 2rem;
  padding-right: 2rem;
  &::-webkit-scrollbar {
    display: none;
  }

  &.dark {
    /* background-color: var(--color-blue-secondary); */
    background-color: var(--color-green-primary);
    background-color: #08041c;
    /* background-color: #08041ce2; */
    color: white;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function AppLayout() {
  const { isDarkMode } = useDarkMode();
  const isDesktopOrTablet = useMediaQuery({ query: "(min-width: 800px)" });

  return (
    <StyledAppLayout>
      <Header />
      {isDesktopOrTablet && <Sidebar />}
      <Main className={isDarkMode ? "dark" : ""}>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
