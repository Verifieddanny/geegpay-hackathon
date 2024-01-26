import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { SlClose } from "react-icons/sl";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useDarkMode } from "../context/UseDarkModeContext";
import DashboardIcon from "./DashboardIcon";
import TrendUp from "./TrendUp";
import Profile from "./Profile";
import Inventory from "./Inventory";
import Discount from "./Discount";
import Info from "./Info";
import Back from "./Back";
import Setting from "./Setting";
import Logout from "./Logout";
import HoriontalToggle from "./HoriontalToggle";

const Contain2 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  justify-content: space-between;
  width: 100%;
  border-radius: 9rem;
  padding: 0.5rem;

  transition: 0.3s all ease-in-out;
`;
const Image = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  object-fit: cover;
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: calc(100vh - 4.2rem);
  width: 19rem;
  text-align: left;
  padding-top: 3rem;
  padding-bottom: 2rem;
  right: -100%;
  top: 105%;
  padding-left: 2rem;
  padding-right: 2rem;
  z-index: -1;
  background-color: #e4e3e3;
  transition: 0.3s all ease-in-out;
  &.dark {
    background-color: #34296e;
    backdrop-filter: blur(10px);
    color: white;
  }

  &.open {
    right: -2rem;
  }
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

const Ps = styled.p`
  font-weight: 500;
  letter-spacing: 0.001rem;
  color: #26282c;
  font-size: 1.4rem;
  &.dark {
    color: white !important;
  }
`;
const Contain = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const MenuTag = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
`;
function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isDarkMode } = useDarkMode();
  const handleMenuClick = (e) => {
    e.preventDefault();
    setMenuOpen((state) => !state);
  };

  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);
  return (
    <>
      <Contain2>
        <Image>
          <Img src="/geepay1.png" />
        </Image>
        <Contain>
          <Ps className={isDarkMode ? "dark" : ""}>DevDanny</Ps>
          <Image>
            <Img src="/DevDanny.jpg" />
          </Image>

          <MenuTag onClick={handleMenuClick}>
            {menuOpen ? <SlClose /> : <HiOutlineMenuAlt2 />}
          </MenuTag>
        </Contain>
        {
          <Nav
            className={`${menuOpen ? "open" : ""} ${isDarkMode ? "dark" : ""}`}
          >
            <NavList>
              <li onClick={handleMenuClick}>
                <StyledNavLink to="/" className={isDarkMode ? "dark" : ""}>
                  <DashboardIcon />
                  <span>Home</span>
                </StyledNavLink>
              </li>
              <li onClick={handleMenuClick}>
                <StyledNavLink
                  to="/bookings"
                  className={isDarkMode ? "dark" : ""}
                >
                  <TrendUp />
                  <span>Trend</span>
                </StyledNavLink>
              </li>
              <li onClick={handleMenuClick}>
                <StyledNavLink
                  to="/cabins"
                  className={isDarkMode ? "dark" : ""}
                >
                  <Profile />
                  <span>Profile</span>
                </StyledNavLink>
              </li>
              <li onClick={handleMenuClick}>
                <StyledNavLink to="/users" className={isDarkMode ? "dark" : ""}>
                  <Inventory />
                  <span>Inventory</span>
                </StyledNavLink>
              </li>
              <li onClick={handleMenuClick}>
                <StyledNavLink
                  to="/settings"
                  className={isDarkMode ? "dark" : ""}
                >
                  <Discount />
                  <span>Discount</span>
                </StyledNavLink>
              </li>
              <li onClick={handleMenuClick}>
                <StyledNavLink to="/Numb" className={isDarkMode ? "dark" : ""}>
                  <Info />
                  <span>Info</span>
                </StyledNavLink>
              </li>
              <li>
                <HoriontalToggle />
              </li>
            </NavList>
            <NavList>
              <li onClick={handleMenuClick}>
                <StyledNavLink to="/Back" className={isDarkMode ? "dark" : ""}>
                  <Back />
                  <span>Back</span>
                </StyledNavLink>
              </li>
              <li onClick={handleMenuClick}>
                <StyledNavLink
                  to="/bookings"
                  className={isDarkMode ? "dark" : ""}
                >
                  <Setting />
                  <span>Setting</span>
                </StyledNavLink>
              </li>
              <li onClick={handleMenuClick}>
                <StyledNavLink
                  to="/cabins"
                  className={isDarkMode ? "dark" : ""}
                >
                  <Logout />
                  <span>Logout</span>
                </StyledNavLink>
              </li>
            </NavList>
          </Nav>
        }
      </Contain2>
    </>
  );
}

export default HeaderMobile;
