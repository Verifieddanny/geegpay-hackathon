import React from "react";
import styled from "styled-components";
import { useDarkMode } from "../../context/UseDarkModeContext";

const FirstDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  margin-bottom: 2rem;
`;
const FIrstDivCopy = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const P = styled.p`
  font-weight: 500;
  letter-spacing: 0.01rem;
  color: #26282c;
  font-size: 1.7rem;
  &.dark {
    color: white;
  }
`;
const Ps = styled.p`
  font-weight: 500;
  letter-spacing: 0.01rem;
  color: #34caa5;
  font-size: 1.7rem;
  cursor: pointer;
  &.dark {
    color: white;
    font-weight: 600;
  }
`;
const Platform = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const Company = styled(Platform)`
  width: 100%;
  row-gap: 0.2rem;
`;
const Comptext = styled.p`
  color: #22242c;
  width: fit-content;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  &.dark {
    color: white;
  }
`;

const CompCopy = styled(Comptext)`
  font-weight: 400;
  color: #525252;
  &.dark {
    color: white;
  }
`;
const StyledMeter = styled.meter`
  width: 100%;
  height: 3rem;

  &::-webkit-meter-bar {
    background-color: #f5f5f5;
    border: none;
    outline: none;
  }

  &::-webkit-meter-optimum-value,
  &::-webkit-meter-suboptimum-value,
  &::-webkit-meter-even-less-good-value {
    background-color: ${(props) => props.color || "#ccc"};
    border-radius: 6px;
  }
`;

function DashboardCompanies() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <FirstDiv>
        <P className={isDarkMode ? "dark" : ""}>Total Platform</P>
        <Ps className={isDarkMode ? "dark" : ""}>See All</Ps>
      </FirstDiv>

      <Platform>
        <Company>
          <Comptext className={isDarkMode ? "dark" : ""}>Book Bazaar</Comptext>
          <StyledMeter color="#6160DC" value={0.8} max={1} />
          <FIrstDivCopy>
            <CompCopy className={isDarkMode ? "dark" : ""}>$2,500,000</CompCopy>
            <CompCopy className={isDarkMode ? "dark" : ""}>+15%</CompCopy>
          </FIrstDivCopy>
        </Company>
        <Company>
          <Comptext className={isDarkMode ? "dark" : ""}>
            Artisan Aisle
          </Comptext>
          <StyledMeter color="#54C5EB" value={0.6} max={1} />
          <FIrstDivCopy>
            <CompCopy className={isDarkMode ? "dark" : ""}>$1,800,000</CompCopy>
            <CompCopy className={isDarkMode ? "dark" : ""}>+10%</CompCopy>
          </FIrstDivCopy>
        </Company>
        <Company>
          <Comptext className={isDarkMode ? "dark" : ""}>Toy Troop</Comptext>
          <StyledMeter color="#FFB74A" value={0.4} max={1} />
          <FIrstDivCopy>
            <CompCopy className={isDarkMode ? "dark" : ""}>$1,200,000</CompCopy>
            <CompCopy className={isDarkMode ? "dark" : ""}>+8%</CompCopy>
          </FIrstDivCopy>
        </Company>
        <Company>
          <Comptext className={isDarkMode ? "dark" : ""}>XStore</Comptext>
          <StyledMeter color="#FF4A55" value={0.2} max={1} />
          <FIrstDivCopy>
            <CompCopy className={isDarkMode ? "dark" : ""}>$1,200,000</CompCopy>
            <CompCopy className={isDarkMode ? "dark" : ""}>+8%</CompCopy>
          </FIrstDivCopy>
        </Company>
      </Platform>
    </>
  );
}

export default DashboardCompanies;
