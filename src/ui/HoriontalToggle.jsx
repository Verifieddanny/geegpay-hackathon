import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useDarkMode } from "../context/UseDarkModeContext";

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  height: 30px;
  width: 60px;
  filter: drop-shadow(0 0 0.75rem #d2d2d2);
  &.dark {
    filter: drop-shadow(0 0 0 #000000);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &::before {
    content: url("/brightness.svg");
    position: absolute;
    height: 25px;
    width: 25px;
    left: 2px;
    top: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #34caa5;
    font-size: 22px;

    border-radius: 50%;
    transition: transform 0.3s;

    fill: #ffffff;
    transition: transform 0.3s, fill 0.3s;
  }
`;

const CheckBox = styled.input`
  display: none;

  &:checked + ${ToggleSlider} {
  }

  &:checked + ${ToggleSlider}:before {
    content: url("/moon.svg");
    transform: translateX(120%);
  }
`;

function HoriontalToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ToggleSwitch
      onChange={toggleDarkMode}
      className={isDarkMode ? "dark" : ""}
    >
      <CheckBox type="checkbox" />
      <ToggleSlider></ToggleSlider>
    </ToggleSwitch>
  );
}

export default HoriontalToggle;
