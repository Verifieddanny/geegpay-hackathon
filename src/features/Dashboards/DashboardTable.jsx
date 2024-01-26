import React from "react";
import styled from "styled-components";
import Table from "../../ui/Table";
import OrderRow from "../../ui/OrderRow";
import { TbFileInvoice } from "react-icons/tb";
import { useDarkMode } from "../../context/UseDarkModeContext";
const FirstDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
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

const data = [
  {
    id: 1,
    name: "Adams Floyed",
    image: "/Frame1.png",
    date: "January 8, 2024",
    amount: 340,
    status: "Paid",
    invoice: <TbFileInvoice />,
  },
  {
    id: 2,
    name: "Hazard Ben",
    image: "/Frame3.png",
    date: "January 6, 2024",
    amount: 150,
    status: "Refund",
    invoice: <TbFileInvoice />,
  },
  {
    id: 3,
    name: "Jenny Ella",
    image: "/Frame4.png",
    date: "January 2, 2024",
    amount: 1000,
    status: "Paid",
    invoice: <TbFileInvoice />,
  },
  {
    id: 4,
    name: "Janes Frances",
    image: "/Frame2.png",
    date: "December 23, 2023",
    amount: 1000,
    status: "Refund",
    invoice: <TbFileInvoice />,
  },

  {
    id: 5,
    name: "Dev Danny",
    image: "/DevDanny.jpg",
    date: "November 29, 2023",
    amount: "150",
    status: "Paid",
    invoice: <TbFileInvoice />,
  },
];
function DashboardTable() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Table columns=" 3.6fr 2.4fr 2fr 1.4fr 1.4fr">
        <FirstDiv>
          <P className={isDarkMode ? "dark" : ""}>Last Orders</P>
          <Ps className={isDarkMode ? "dark" : ""}>See All</Ps>
        </FirstDiv>
        <Table.Header>
          <div>Name</div>
          <div>Date</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Invoice</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={data}
          render={(order) => <OrderRow key={order.id} order={order} />}
        />
        <Table.Footer></Table.Footer>
      </Table>
    </>
  );
}

export default DashboardTable;
