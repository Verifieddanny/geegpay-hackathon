import styled from "styled-components";
import Tag from "./Tag";
import Table from "./Table";
import { formatCurrency } from "../utils/helper";
import Modal from "./Modal";
import { useDarkMode } from "../context/UseDarkModeContext";
import { useMediaQuery } from "react-responsive";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  width: fit-content;
  @media (max-width: 700px) {
    font-size: 0.8rem;
    column-gap: 0.1rem;
  }
`;
const Boxing = styled.div`
  width: 17rem;
  height: 12rem;
  background-color: white;
  &.dark {
    background-color: #0d062d;
    color: white;
  }
`;
const Cabin2 = styled.div`
  color: var(--color-grey-500);
  font-size: 1.2rem;
  text-align: left;
  &.invoice {
    cursor: pointer;
    text-align: center;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }
  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;
const Pss = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: #0d062d;
  &.dark {
    color: white;
  }
  @media (max-width: 700px) {
    font-size: 0.6rem;
  }
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

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-weight: 500;
  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;

const InvoiceSth = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  column-gap: 1rem;
`;
function OrderRow({
  order: { id, name, image, date, amount, status, invoice },
}) {
  const statusToTagName = {
    Refund: "red",
    Paid: "green",
  };
  const { isDarkMode } = useDarkMode();
  const isDesktopOrTablet = useMediaQuery({ query: "(min-width: 800px)" });

  return (
    <Table.Row>
      <Cabin>
        {isDesktopOrTablet && (
          <Image>
            <Img src={image} />
          </Image>
        )}
        {name}
      </Cabin>

      <Cabin2>{date}</Cabin2>

      <Amount>{formatCurrency(amount)}</Amount>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Modal>
        <Modal.Open opens="invoice-name">
          <Cabin2 className="invoice">
            {invoice}
            <Pss className={isDarkMode ? "dark" : ""}>view</Pss>
          </Cabin2>
        </Modal.Open>
        <Modal.Window name="invoice-name">
          <Boxing download className={isDarkMode ? "dark" : ""}>
            <Pss className={isDarkMode ? "dark" : ""}>Invoice #{id}</Pss>

            <InvoiceSth>
              <Pss className={isDarkMode ? "dark" : ""}>Name:</Pss>{" "}
              <Pss className={isDarkMode ? "dark" : ""}>{name}</Pss>
            </InvoiceSth>
            <InvoiceSth>
              <Pss className={isDarkMode ? "dark" : ""}>Status:</Pss>
              <Tag type={statusToTagName[status]}>
                {status.replace("-", " ")}
              </Tag>
            </InvoiceSth>
            <InvoiceSth>
              <Pss className={isDarkMode ? "dark" : ""}>Amount:</Pss>
              <Pss className={isDarkMode ? "dark" : ""}>{amount}</Pss>
            </InvoiceSth>
          </Boxing>
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default OrderRow;
