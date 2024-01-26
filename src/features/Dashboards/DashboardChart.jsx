import React, { useState } from "react";
import styled from "styled-components";
import { IoChevronDownOutline } from "react-icons/io5";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useDarkMode } from "../../context/UseDarkModeContext";

const Contain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
const Contain2 = styled.div`
  width: fit-content;
  display: flex;
  column-gap: 1rem;
`;
const P = styled.p`
  font-weight: 600;
  letter-spacing: 0.01rem;
  color: #26282c;
  font-size: 2rem;
  &.dark {
    color: white;
  }
`;
const Ps = styled.p`
  font-weight: 500;
  letter-spacing: 0.001rem;
  color: #26282c;
  font-size: 1.4rem;
  &.dark {
    color: white;
  }
`;
const Email = styled.p`
  font-weight: 400;
  letter-spacing: 0.001rem;
  color: #787486;
  font-size: 1rem;
  &.dark {
    color: white;
  }
`;
const Contain3 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border: 1px solid #dadddd;
  border-radius: 9rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: white;
    filter: var(--shadow-md);
  }

  &.dark {
    &:hover {
      background-color: #0d062d;
    }
  }
`;

const ChartFill = styled.div`
  position: relative;
  z-index: 1;
`;

const About = styled.div`
  position: absolute;
  top: -10%;
  left: calc(100% + 10px);
  width: fit-content;
  padding: 1rem;
  background-color: white;
  z-index: 5000;
  filter: drop-shadow(0 0 0.75rem #d2d2d2);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.4rem;
  height: fit-content;
  &.dark {
    color: white;
    background-color: #251c51;
    filter: drop-shadow(0 0 0 #0000);
  }
  @media (max-width: 700px) {
    left: 0;
    top: 100%;
  }
`;
const Button = styled.div`
  width: 100%;
  height: 1rem;
  outline: 0;
  border: 0;
  display: flex;
  padding: 0.2rem;

  justify-content: center;
  align-items: center;
  font-weight: 400;
  letter-spacing: 0.001rem;
  color: #787486;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--color-green-primary);
    color: white;
  }
`;

const monthlyData = [
  { name: "Jan", amt: 2400 },
  { name: "Feb", amt: 1398 },
  { name: "Mar", amt: 9800 },
  { name: "Apr", amt: 3908 },
  { name: "Mei", amt: 4800 },
  { name: "Jun", amt: 3800 },
  { name: "Jul", amt: 4300 },
  { name: "Aug", amt: 6700 },
  { name: "Sep", amt: 3000 },
  { name: "Okt", amt: 2300 },
  { name: "Nov", amt: 4000 },
  { name: "Dec", amt: 1400 },
];
const dailyData = [
  { name: "Mon", amt: 70 },
  { name: "Tue", amt: 138 },
  { name: "Wed", amt: 600 },
  { name: "Thu", amt: 80 },
  { name: "Fri", amt: 300 },
  { name: "Sat", amt: 100 },
  { name: "Sun", amt: 50 },
];
const weeklyData = [];

for (let i = 1; i <= 52; i++) {
  const randomAmount = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  weeklyData.push({ name: `Week${i}`, amt: randomAmount });
}

const yearlyData = [];

for (let name = 2014; name <= 2024; name++) {
  const randomAmount = Math.floor(Math.random() * (100000 - 20000 + 1)) + 20000;
  yearlyData.push({ name, amt: randomAmount });
}

const RoundedTopBar = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 12; // Adjust the radius as needed

  return (
    <path
      d={`
        M ${x},${y + radius}
        A ${radius},${radius} 0 0 1 ${x + radius},${y}
        L ${x + width - radius},${y}
        A ${radius},${radius} 0 0 1 ${x + width},${y + radius}
        L ${x + width},${y + height}
        L ${x},${y + height}
        Z
      `}
      fill={fill}
    />
  );
};

function DashboardChart() {
  const [sorts, setSorts] = useState("Monthly");
  const [isTrue, setIsTrue] = useState(false);
  const { isDarkMode } = useDarkMode();
  const colors = isDarkMode
    ? {
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        text: "#374151",
        background: "#fff",
      };
  const handleButtonClick = (sort) => {
    setSorts(sort);
    setIsTrue(false);
  };
  let data;
  switch (sorts) {
    case "Yearly":
      data = yearlyData;
      break;
    case "Monthly":
      data = monthlyData;
      break;
    case "Weekly":
      data = weeklyData;
      break;
    case "Daily":
      data = dailyData;
      break;
    default:
      data = monthlyData;
  }

  return (
    <>
      {" "}
      <Contain>
        <P className={isDarkMode ? "dark" : ""}>Sales report</P>

        <Contain2>
          <Ps className={isDarkMode ? "dark" : ""}>Sort by:</Ps>
          <Contain3
            onClick={() => setIsTrue((istrue) => !istrue)}
            className={isDarkMode ? "dark" : ""}
          >
            <Email className={isDarkMode ? "dark" : ""}>
              {sorts} <IoChevronDownOutline />
            </Email>
            {isTrue && (
              <About
                onClick={(e) => e.stopPropagation()}
                className={isDarkMode ? "dark" : ""}
              >
                <Button
                  value="Yearly"
                  onClick={() => {
                    handleButtonClick("Yearly");
                  }}
                >
                  Yearly
                </Button>
                <Button
                  value="Monthly"
                  onClick={() => {
                    handleButtonClick("Monthly");
                  }}
                >
                  Monthly
                </Button>
                <Button
                  value="Weekly"
                  onClick={() => {
                    handleButtonClick("Weekly");
                  }}
                >
                  Weekly
                </Button>
                <Button
                  value="Daily"
                  onClick={() => {
                    handleButtonClick("Daily");
                  }}
                >
                  Daily
                </Button>
              </About>
            )}
          </Contain3>
        </Contain2>
      </Contain>
      <ChartFill>
        <ResponsiveContainer height={300} width="100%">
          <BarChart data={data} barSize={25}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis max={100000} />
            <Tooltip contentStyle={{ backgroundColor: colors.background }} />
            <Bar
              dataKey="amt"
              fill="url(#colorGradient)"
              shape={<RoundedTopBar />}
            />

            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34CAA5" />
                <stop offset="100%" stopColor="rgba(52, 202, 165, 0)" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </ChartFill>
    </>
  );
}

export default DashboardChart;
