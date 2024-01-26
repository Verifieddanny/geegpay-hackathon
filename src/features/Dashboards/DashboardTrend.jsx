import React from "react";
import { IoTrendingDownSharp, IoTrendingUp } from "react-icons/io5";
import styled from "styled-components";
import { useDarkMode } from "../../context/UseDarkModeContext";
const Order = styled.div`
  grid-area: order;
  border-radius: 0.8rem;
  filter: drop-shadow(0 0 0.75rem #efefef);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  row-gap: 0.2rem;
  padding: 1rem;
  &.dark {
    color: white;
    background-color: var(--color-blue-secondary);
    filter: drop-shadow(0 0 0 #0000);
  }
`;

const Refund = styled.div`
  grid-area: Refund;
  border-radius: 0.8rem;
  filter: drop-shadow(0 0 0.75rem #efefef);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: start;
  row-gap: 0.2rem;
  padding: 1rem;
  &.dark {
    color: white;
    background-color: var(--color-blue-secondary);

    filter: drop-shadow(0 0 0 #0000);
  }
`;

const Income = styled.div`
  grid-area: income;
  border-radius: 0.8rem;
  filter: drop-shadow(0 0 0.75rem #efefef);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  row-gap: 0.2rem;
  padding: 1rem;
  &.dark {
    color: white;
    background-color: var(--color-blue-secondary);

    filter: drop-shadow(0 0 0 #0000);
  }
`;

const Average = styled.div`
  grid-area: average;
  border-radius: 0.8rem;
  filter: drop-shadow(0 0 0.75rem #efefef);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: start;
  row-gap: 0.2rem;
  padding: 1rem;
  &.dark {
    color: white;
    background-color: var(--color-blue-secondary);

    filter: drop-shadow(0 0 0 #0000);
  }
`;
const FirstDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.p`
  font-size: 18;
  font-weight: 500;
  color: #898989;
  &.dark {
    color: white;
  }
`;
const Total = styled.div`
  font-size: 32;
  font-weight: 600;
  color: #3a3f51;
`;
const GoodRate = styled.div`
  color: #34caa5;
  background-color: #34caa440;
  font-weight: 400;
  letter-spacing: 0.001rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 6rem;
`;
const BadRate = styled.div`
  color: #ed544e;
  background-color: #ed534e35;
  font-weight: 400;
  letter-spacing: 0.001rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 6rem;
`;
const Email = styled.p`
  font-weight: 400;
  letter-spacing: 0.001rem;
  color: #787486;
  font-size: 1.5rem;
`;

function DashboardTrend() {
  const { isDarkMode: isDark } = useDarkMode();

  return (
    <>
      {" "}
      <Order className={isDark ? "dark" : ""}>
        <FirstDiv>
          <img src="/orderIcon.svg" />
          <img src="/orderchhart.svg" />
        </FirstDiv>
        <Title className={isDark ? "dark" : ""}>Total Order</Title>
        <Total>350</Total>
        <FirstDiv>
          <GoodRate>
            <IoTrendingUp />
            &nbsp; 23.5%
          </GoodRate>
          <Email>vs. previous month</Email>
        </FirstDiv>
      </Order>
      <Refund className={isDark ? "dark" : ""}>
        <FirstDiv>
          <img src="/refundicon.svg" />
          <img src="/RefundChart.svg" />
        </FirstDiv>
        <Title className={isDark ? "dark" : ""}>Total Refund</Title>
        <Total>270</Total>
        <FirstDiv>
          <BadRate>
            <IoTrendingDownSharp />
            &nbsp; 23.5%
          </BadRate>
          <Email>vs. previous month</Email>
        </FirstDiv>
      </Refund>
      <Income className={isDark ? "dark" : ""}>
        <FirstDiv>
          <img src="/incomeIcon.svg" />
          <img src="/incomechart.svg" />
        </FirstDiv>
        <Title className={isDark ? "dark" : ""}>Total Income</Title>
        <Total>$350.000</Total>
        <FirstDiv>
          <GoodRate>
            <IoTrendingUp />
            &nbsp; 23.5%
          </GoodRate>
          <Email>vs. previous month</Email>
        </FirstDiv>
      </Income>
      <Average className={isDark ? "dark" : ""}>
        <FirstDiv>
          <img src="/salesicon.svg" />
          <img src="/saleschart.svg" />
        </FirstDiv>
        <Title className={isDark ? "dark" : ""}>Average Sales</Title>
        <Total>1567</Total>
        <FirstDiv>
          <BadRate>
            <IoTrendingDownSharp />
            &nbsp; 23.5%
          </BadRate>
          <Email>vs. previous month</Email>
        </FirstDiv>
      </Average>
    </>
  );
}

export default DashboardTrend;
