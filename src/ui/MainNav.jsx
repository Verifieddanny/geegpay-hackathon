import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";
import TrendUp from "./TrendUp";
import DashboardIcon from "./DashboardIcon";
import Profile from "./Profile";
import Inventory from "./Inventory";
import Discount from "./Discount";
import Info from "./Info";
import Back from "./Back";
import Setting from "./Setting";
import Logout from "./Logout";
import "../App.css";
import VertcalToggle from "./VertcalToggle";
import { useDarkMode } from "../context/UseDarkModeContext";

const Nav = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: fit-content;
  color: var(--color-grey-600);
  font-size: 1rem;
  font-weight: 500;
  padding: 1.2rem 0rem;
  transition: all 0.3s ease-in-out;

  & svg {
    font-size: 1rem;
    width: 1.6rem;
    height: 1.6rem;
  }
  & svg path {
    fill: ${(props) => (props.$icon ? "var(--color-grey-400)" : "")};
    stroke: var(--color-grey-400);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    & svg path {
      fill: ${(props) => (props.$icon ? "var(--color-blue-secondary)" : "")};
      stroke: var(--color-blue-secondary);
    }

    &.dark {
      & svg path {
        fill: ${(props) => (props.$icon ? "white" : "")};
        stroke: white;
      }
    }
  }
`;

function MainNav() {
  // const { isDarkMode, toggleDarkMode } = useDarkMode()
  const { isDarkMode } = useDarkMode();

  return (
    <Nav>
      <NavList>
        <li>
          <StyledNavLink
            to="/"
            $icon={true}
            className={isDarkMode ? "dark" : ""}
          >
            <DashboardIcon />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/booking" className={isDarkMode ? "dark" : ""}>
            <TrendUp />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins" className={isDarkMode ? "dark" : ""}>
            <Profile />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users" className={isDarkMode ? "dark" : ""}>
            <Inventory />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings" className={isDarkMode ? "dark" : ""}>
            <Discount />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/account" className={isDarkMode ? "dark" : ""}>
            <Info />
          </StyledNavLink>
        </li>

        <li className="toggles">
          <VertcalToggle />
        </li>
      </NavList>
      <NavList>
        <li>
          <StyledNavLink to="/kkj" className={isDarkMode ? "dark" : ""}>
            <Back />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings" className={isDarkMode ? "dark" : ""}>
            <Setting />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins" className={isDarkMode ? "dark" : ""}>
            <Logout />
          </StyledNavLink>
        </li>
      </NavList>
    </Nav>
  );
}

export default MainNav;

{
  /* <Nav>
<NavList>
  <li>
    <StyledNavLink to="/">
      <DashboardIcon />
      <span>Home</span>
    </StyledNavLink>
  </li>
  <li>
    <StyledNavLink to="/bookings">
      <TrendUp />
      <span>Trend</span>
    </StyledNavLink>
  </li>
  <li>
    <StyledNavLink to="/cabins">
      <Profile />
      <span>Profile</span>
    </StyledNavLink>
  </li>
  <li>
    <StyledNavLink to="/users">
      <Inventory />
      <span>Inventory</span>
    </StyledNavLink>
  </li>
  <li>
    <StyledNavLink to="/settings">
      <Discount />
      <span>Discount</span>
    </StyledNavLink>
  </li>
  <li>
    <StyledNavLink to="/settings">
      <Info />
      <span>Info</span>
    </StyledNavLink>
  </li>
</NavList>
<NavList>
  <li>
    <StyledNavLink to="/">
      <Back />
      <span>Back</span>
    </StyledNavLink>
  </li>
  <li>
    <StyledNavLink to="/bookings">
      <Setting />
      <span>Setting</span>
    </StyledNavLink>
  </li>
  <li>
    <StyledNavLink to="/cabins">
      <Logout />
      <span>Logout</span>
    </StyledNavLink>
  </li>
</NavList>
</Nav> */
}
