import React, { useState } from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { useDarkMode } from "../context/UseDarkModeContext";
const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.dark {
    color: white !important;
  }
`;
const P = styled.p`
  font-weight: 600;
  letter-spacing: 0.01rem;
  color: #26282c;
  font-size: 2rem;
  &.dark {
    color: white !important;
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
const Email = styled.p`
  font-weight: 400;
  letter-spacing: 0.001rem;
  color: #787486;
  font-size: 1rem;
  &.dark {
    color: white !important;
  }
`;

const Profile = styled.div`
  display: flex;
  width: fit-content;
  padding: 1rem 0;
  column-gap: 1.5rem;
  &.dark {
    color: white !important;
  }
`;
const Input = styled.input`
  height: 4rem;
  width: 30rem;
  border: 1px solid #dadddd;
  border-radius: 9rem;
  padding-left: 4rem;
`;
const SearchIcon = styled.span`
  width: fit-content;
  position: absolute;
  top: 0.9rem;
  left: 1rem;

  font-size: 2.4rem;

  &.dark {
    color: var(--color-blue-secondary);
  }
`;
const StyledDateInput = styled.input`
  &::-webkit-datetime-edit-fields-wrapper,
  &::-webkit-datetime-edit-text,
  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-year-field {
    display: none;
  }

  &::placeholder {
    color: transparent;
  }

  outline: none;
  border: none;
  width: 3rem;
  height: 3rem;
  opacity: 1;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  &::-webkit-calendar-picker-indicator {
    position: relative;
    left: -0.5rem;
    top: 0;
    width: 2rem;
    height: 2rem;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  &.dark {
    color: white !important;
    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
`;

const Contain = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
const Contain2 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border: 1px solid #dadddd;
  border-radius: 9rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
`;

const DropDown = styled.div`
  transition: 0.3s all ease-in-out;

  &.upside-down {
    transform: rotate(180deg);
  }
`;

const Notification = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dadddd;
  border-radius: 50%;
  font-size: 2.4rem;
  cursor: pointer;
  margin-left: 1rem;
`;

const Image = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  overflow: hidden;
`;
const Img = styled.img`
  object-fit: cover;
`;
const About = styled.div`
  position: absolute;
  top: 110%;
  z-index: 100;
  padding: 1rem;
  width: 100%;
  background-color: white;
  border-radius: 2rem;
  filter: drop-shadow(0 0 0.75rem #d2d2d2);
  display: flex;
  flex-direction: column;
  align-items: center;
  &.dark {
    color: white;
    background-color: #251c51;
    filter: drop-shadow(0 0 0 #0000);
  }
`;

const Text = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.1rem;
  align-items: center;
`;
function HeaderDesktop() {
  const [selectedDate, setSelectedDate] = useState("January 27, 2024");
  const [isTrue, setIsTrue] = useState(false);
  const { isDarkMode: isDark } = useDarkMode();

  const handleDateChange = (event) => {
    const inputDate = event.target.value;

    const dateObject = new Date(inputDate);

    const formattedDate = dateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setSelectedDate(formattedDate);
  };

  return (
    <StyledHeader className={isDark ? "dark" : ""}>
      <P className={isDark ? "dark" : ""}>Desktop</P>

      <Profile className={isDark ? "dark" : ""}>
        <Contain>
          <SearchIcon className={isDark ? "dark" : ""}>
            <CiSearch />
          </SearchIcon>
          <Input type="search" placeholder="Search..." />
        </Contain>
        <Contain>
          <StyledDateInput
            type="date"
            id="dateInput"
            onChange={handleDateChange}
            value={selectedDate}
            placeholder="Calender"
            className={isDark ? "dark" : ""}
          />
          <Ps className={isDark ? "dark" : ""}>{selectedDate}</Ps>

          <Notification>
            <IoNotificationsOutline />
          </Notification>
        </Contain>

        <Contain2 onClick={() => setIsTrue((istrue) => !istrue)}>
          <Image>
            <Img src="/DevDanny.jpg" />
          </Image>
          <Text>
            <Ps className={isDark ? "dark" : ""}>Dev Danny</Ps>
            <Email className={isDark ? "dark" : ""}>
              dannyclasic56@gmail.com
            </Email>
          </Text>
          <DropDown className={isTrue ? "upside-down" : ""}>
            <IoChevronDownOutline />
          </DropDown>
          {isTrue && (
            <About className={isDark ? "dark" : ""}>
              <Ps className={isDark ? "dark" : ""}>Dev Danny</Ps>
              <Email className={isDark ? "dark" : ""}>
                dannyclasic56@gmail.com
              </Email>
              <Ps className={isDark ? "dark" : ""}>Web Developer 😊</Ps>
              <img src="/DevDanny.jpg" width={"70rem"} height={"80rem"} />
            </About>
          )}
        </Contain2>
      </Profile>
    </StyledHeader>
  );
}

export default HeaderDesktop;
