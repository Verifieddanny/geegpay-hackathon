import React, { useState } from "react";
import styled from "styled-components";
import DashboardChart from "../features/Dashboards/DashboardChart";
import DashboardTrend from "../features/Dashboards/DashboardTrend";
import DashboardTable from "../features/Dashboards/DashboardTable";
import DashboardCompanies from "../features/Dashboards/DashboardCompanies";
import { useDarkMode } from "../context/UseDarkModeContext";

const ParentDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Chart Chart Chart Chart Trend Trend Trend"
    "Chart Chart Chart Chart Trend Trend Trend"
    "Chart Chart Chart Chart Trend Trend Trend"
    "Tables Tables Tables Tables Compaines Compaines Compaines"
    "Tables Tables Tables Tables Compaines Compaines Compaines"
    "Tables Tables Tables Tables Compaines Compaines Compaines"
    "Tables Tables Tables Tables Compaines Compaines Compaines";
  width: 100%;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 700px) {
    display: block;
    margin-top: 5rem;
    overflow-x: hidden;
  }
`;

const Charts = styled.div`
  grid-area: Chart;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 700px) {
    margin-bottom: 2rem;
  }
`;

const Trends = styled.div`
  grid-area: Trend;
  display: grid;
  padding: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 3px 16px;
  grid-auto-flow: row;
  grid-template-areas:
    "order order Refund Refund"
    "order order Refund Refund"
    "average average income income"
    "average average income income";

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const Tables = styled.div`
  grid-area: Tables;
  @media (max-width: 700px) {
    margin-bottom: 2rem;
  }
`;
const Companies = styled.div`
  grid-area: Compaines;
  background-color: #fff;
  border-radius: 2rem;
  margin-left: 1rem;
  overflow: scroll;
  height: 44rem;

  &::-webkit-scrollbar {
    display: none;
  }
  &.dark {
    background-color: #0d062d;
  }
  @media (max-width: 700px) {
    height: fit-content;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }
`;

function Dashboard() {
  const { isDarkMode } = useDarkMode();

  return (
    <ParentDiv>
      <Charts>
        <DashboardChart />
      </Charts>
      <Trends>
        <DashboardTrend />
      </Trends>
      <Tables>
        <DashboardTable />
      </Tables>
      <Companies className={isDarkMode ? "dark" : ""}>
        <DashboardCompanies />
      </Companies>
    </ParentDiv>
  );
}

export default Dashboard;
